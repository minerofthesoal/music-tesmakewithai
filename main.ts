namespace randomMusic {
    /**
     * Play a random sound effect
     */
    //% block="play random sound effect"
    export function playRandomSound(): void {
        const m1 = randint(100, 1000)
        const m2 = randint(100, 500)
        const m3 = randint(100, 1000)
        music.play(music.createSoundEffect(
            WaveShape.Sine,
            m1,
            m3,
            255,
            0,
            m2,
            SoundExpressionEffect.None,
            InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    }

    /**
     * Play a sequence of random sound effects with rhythm
     */
    //% block="play random rhythm sequence"
    export function playRandomRhythm(): void {
        const beatDurations = [
            music.beat(BeatFraction.Half),
            music.beat(BeatFraction.Quarter),
            music.beat(BeatFraction.Eighth)
        ]
        for (let i = 0; i < 8; i++) {
            playRandomSound()
            pause(beatDurations[randint(0, beatDurations.length - 1)])
        }
    }

    /**
     * Play a full random song between 12s and 2m
     */
    //% block="play full random song"
    export function playFullRandomSong(): void {
        const beatDurations2 = [
            music.beat(BeatFraction.Half),
            music.beat(BeatFraction.Quarter),
            music.beat(BeatFraction.Eighth)
        ]
        const minDuration = 12000  // 12 seconds
        const maxDuration = 120000 // 2 minutes
        const targetDuration = randint(minDuration, maxDuration)
        let elapsed = 0

        while (elapsed < targetDuration) {
            const start = control.millis()
            playRandomSound()
            const pauseTime = beatDurations2[randint(0, beatDurations2.length - 1)]
            pause(pauseTime)
            elapsed += control.millis() - start + pauseTime
        }
    }
}
