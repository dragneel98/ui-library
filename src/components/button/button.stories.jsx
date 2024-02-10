import { Button } from "./Button";

export default {
    title: "components/Button",
    component: Button,
    tags: ['autodocs'],
    args: {
        children: "button",
    }
}

export const Primary = {
    args: {
        children: "button",
    }
}

export const Secondary = {
    args: {
        children: "button",
        type: "secondary"
    }
}