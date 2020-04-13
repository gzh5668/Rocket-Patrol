// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        // store pointValue
        this.points = pointValue;
    }
    update() {
        // move spaceship
        this.x -= game.settings.spaceshipSpeed;
        // wraparound spaceship (left to right edge)
        if (this.x <= 0-this.width) {
            this.reset();
        }
    }

    reset() {
        this.x = game.config.width;
    }
}