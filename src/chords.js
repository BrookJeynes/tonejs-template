export default class Chords {
    chords = {
        "C": ["C4", "E4", "G4"]
    };

    /**
     * Represents a series of chords.
     * @constructor
     */
    constructor() {
        this.synth = new Tone.PolySynth().toDestination();
    }

    /**
     * Play a chord.
     * @param {string} chord - The chord to play, i.e. "C".
     * @param {number} duration - How long to play the chord for.
     */
    playChord(chord, duration) {
        chord = this.chords[chord];
        if (chord == undefined) {
            console.error("[ERROR] Chord does not exist.");
        } else {
            this.play(chord, duration);
        }
    }

    /**
     * Play a chord.
     * @private
     * @param {string[]} chord - The chord to play, i.e. "C".
     * @param {number} duration - How long to play the chord for.
     */
    play(notes, duration) {
        this.synth.triggerAttackRelease(notes, duration);
    }
}
