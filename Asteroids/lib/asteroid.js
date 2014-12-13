(function () {
    if (typeof Asteroids === "undefined") {
        window.Asteroids = {};
    }

    var Asteroid = Asteroids.Asteroid = function (params) {
        Asteroids.MovingObject.call(this, params);
    }

    Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

    var HEX_DIGITS = "0123456789ABCDEF";
    Asteroid.randomColor = function () {
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += HEX_DIGITS[Math.floor((Math.random() * 16))];
        }

        return color;
    }

    Asteroid.randomAsteroid = function (maxX, maxY, game) {
        return new Asteroid({
            pos: [maxX * Math.random(), maxY * Math.random()],
               vel: Asteroids.Util.randomVec(Math.random() * 5),
               radius: Math.random() * (35 - 10) + 10,
               color: Asteroid.randomColor(),
               game: game
        })
    }
})();
