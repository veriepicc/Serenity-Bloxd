const WaypointManager = {
  name: 'Waypoint', // Keep name for consistency
  category: 'Utility',
  description: 'Manages and displays multiple waypoints in the world.',
  enabled: false,

  waypoints: [],
  waypointElements: new Map(),
  
  camera: null,
  entities: null,
  deathMarkerObserver: null,

  settings: [
      { id: 'info', name: 'Waypoint Manager', type: 'info', description: 'Click the settings cog to manage your waypoints.'}
  ],

  onEnable(manager) {
    this.manager = manager;
    this.loadWaypoints();
    this.waypoints.forEach(wp => this.createWaypointElement(wp));
  },

  onDisable() {
    this.destroyDisplay();
    this.camera = null;
    this.entities = null;
  },
  
  onTick() {
    // Heavy logic on a throttled tick
    if (!this.camera || !this.entities) {
        this.findGameData();
    }
  },

  onFrame() {
    const inGame = document.querySelector('.HotBarGameItemsContainer');
    const onRotateScreen = document.querySelector('.ForceRotateBackground');

    if (!inGame || onRotateScreen) {
        this.waypointElements.forEach(element => {
            if (element) element.style.display = 'none';
        });
        return;
    }

    // Smooth visual updates every frame
    this.waypoints.forEach(wp => this.updateWaypointPosition(wp));
  },

  // --- Waypoint Management ---

  getWaypoints() {
    return this.waypoints;
  },

  addWaypoint(data) {
    const newWaypoint = {
      id: Date.now(),
      title: 'New Waypoint',
      x: 0,
      y: 0,
      z: 0,
      color: '#5E72EB',
      enabled: true,
      ...data
    };
    this.waypoints.push(newWaypoint);
    this.createWaypointElement(newWaypoint);
    this.saveWaypoints();
  },

  removeWaypoint(id) {
    this.waypoints = this.waypoints.filter(wp => wp.id !== id);
    if (this.waypointElements.has(id)) {
      this.waypointElements.get(id).remove();
      this.waypointElements.delete(id);
    }
    this.saveWaypoints();
  },

  updateWaypoint(id, data) {
    const index = this.waypoints.findIndex(wp => wp.id === id);
    if (index !== -1) {
      this.waypoints[index] = { ...this.waypoints[index], ...data };
      this.updateWaypointElement(this.waypoints[index]);
      this.saveWaypoints();
    }
  },

  saveWaypoints() {
    this.manager.saveConfiguration();
  },

  loadWaypoints(savedWaypoints) {
    this.waypoints = savedWaypoints || this.manager.exportConfiguration().waypoints || [];
    this.waypointElements.forEach(el => el.remove());
    this.waypointElements.clear();
    this.waypoints.forEach(wp => this.createWaypointElement(wp));
  },
  
  getCurrentPlayerPosition() {
    if (!this.entities) return null;
    const id = this.entities.playerEntity || 1;
    const pos = this.entities.getState(id, "position") || this.entities.getState(id, "physics");
    if (!pos || !pos.position) return null;
    const [x, y, z] = pos.position;
    return { x: x.toFixed(2), y: y.toFixed(2), z: z.toFixed(2) };
  },

  // --- Rendering ---

  createWaypointElement(waypoint) {
    if (this.waypointElements.has(waypoint.id)) return;
    
    const element = document.createElement('div');
    element.className = 'serenity-waypoint-static';
    element.innerHTML = `
        <div class="waypoint-static-icon">
             <svg viewBox="0 0 384 512" fill="currentColor">
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67a24 24 0 01-43.464 0zM192 256a64 64 0 100-128 64 64 0 000 128z"/>
            </svg>
        </div>
        <div class="waypoint-static-text">
            <span class="waypoint-static-title"></span>
            <span class.waypoint-static-distance"></span>
        </div>
    `;
    document.body.appendChild(element);
    this.waypointElements.set(waypoint.id, element);
    this.updateWaypointElement(waypoint);
  },

  updateWaypointElement(waypoint) {
      const element = this.waypointElements.get(waypoint.id);
      if (!element) return;
      element.querySelector('.waypoint-static-title').textContent = waypoint.title;
      element.style.setProperty('--waypoint-color', waypoint.color);
  },

  findGameData() {
    try {
        const hotbar = document.querySelector(".HotBarContainer");
        if (!hotbar) return;
        const deps = Object.values(hotbar)[0]?.return?.updateQueue?.lastEffect?.deps;
        if (!deps) return;
        const root = deps[2];
        if (!root) return;
        this.entities = Object.values(root).find(o => o?.entities?.getState)?.entities;
        for (const obj of Object.values(root)) {
            if (typeof obj === "object" && obj && "camera" in obj) {
                this.camera = obj.camera;
                break;
            }
        }
    } catch (e) {
      this.camera = null;
      this.entities = null;
    }
  },

  updateWaypointPosition(waypoint) {
    const element = this.waypointElements.get(waypoint.id);
    if (!element || !this.camera || !this.entities || !waypoint.enabled) {
        if(element) element.style.display = 'none';
        return;
    }

    const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
    
    const id = this.entities.playerEntity || 1;
    const pos = this.entities.getState(id, "position") || this.entities.getState(id, "physics");
    if (!pos || !pos.position) {
      element.style.display = 'none';
      return;
    }

    const [px, py, pz] = pos.position;
    const dx = waypoint.x - px;
    const dy = py - waypoint.y;
    const dz = waypoint.z - pz;
    
    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

    const { pitch, heading } = this.camera;
    const fx = Math.cos(pitch) * Math.sin(heading);
    const fy = Math.sin(pitch);
    const fz = Math.cos(pitch) * Math.cos(heading);
    const rx = Math.sin(heading - Math.PI / 2);
    const rz = Math.cos(heading - Math.PI / 2);
    const ux = fy * rz, uy = fz * rx - fx * rz, uz = -fy * rx;
    const ul = Math.sqrt(ux*ux + uy*uy + uz*uz);
    const upX = ux/ul, upY = uy/ul, upZ = uz/ul;
    const dotForward = fx*dx + fy*dy + fz*dz;
    const dotRight = rx*dx + rz*dz;
    const dotUp = upX*dx + upY*dy + upZ*dz;

    if (dotForward < 0 || distance < 1.5) {
      element.style.display = 'none';
      return;
    }
    
    const screenWidth = window.innerWidth, screenHeight = window.innerHeight;
    const scaleProjection = 500 / dotForward;
    const offsetX = clamp(-dotRight * scaleProjection, -screenWidth/2, screenWidth/2);
    const offsetY = clamp(dotUp * scaleProjection, -screenHeight/2, screenHeight/2);

    element.style.display = 'flex';
    element.style.left = `${screenWidth/2 + offsetX}px`;
    element.style.top = `${screenHeight/2 - offsetY}px`;

    const scale = clamp(1 - (distance / 200), 0.4, 1.2);
    element.style.transform = `translate(-50%, -100%) scale(${scale})`;
    element.querySelector('.waypoint-static-distance').textContent = `${distance.toFixed(0)}m`;
  }
};

export default WaypointManager; 