let luz: string;
while (true) {
    luz = "" + input.lightLevel()
    if (input.lightLevel() > 200) {
        basic.showIcon(IconNames.Skull)
        basic.showString(luz)
    } else if (input.lightLevel() >= 100 && input.temperature() <= 200) {
        basic.showIcon(IconNames.Happy)
        basic.showString(luz)
    } else {
        basic.showIcon(IconNames.Ghost)
        basic.showString(luz)
    }
    
}
