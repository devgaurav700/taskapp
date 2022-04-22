export const getIcon = (icon) => {
    switch (icon) {
        case "back":
            return require("../assets/icons/back.png")
        case "map":
            return require("../assets/icons/map.png")
        case "search":
            return require("../assets/icons/search.png")

        default:
            return require("../assets/icons/map.png")
    }
}