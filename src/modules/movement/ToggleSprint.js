const ToggleSprint = {
    name: "ToggleSprint",
    category: "Movement",
    description: "Automatically sprints for you.",
    enabled: true,

    settings: [
        {
            id: "show-text",
            name: "Show Text",
            type: "boolean",
            value: true
        },
        {
            id: "hud-text",
            name: "HUD Text",
            type: "text",
            value: "[Sprinting (Toggled)]"
        }
    ],
};

export default ToggleSprint; 