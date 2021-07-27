import { useState, useContext, createContext } from 'react';

const moods = {
    happy: '😁',
    angry: '🤬'
}

const MoodContext = createContext(moods);

export default function FunUseContext(){
    const [mood, setMood] = useState('😁');
    return (
        <MoodContext.Provider value={mood}>
            <div>
                <button onClick={() => setMood('🤬')}>Angry</button>
                <button onClick={() => setMood('😁')}>Happy</button>
                <button onClick={() => setMood('😔')}>Sad</button>
                <p>I am in <i>Parent</i> Function : {mood}</p>
            </div>
            <MoodEmoji/>
            <MoodEmojiCons/>
        </MoodContext.Provider>
    );
}

function MoodEmoji(){
    const mood = useContext(MoodContext);
    return (
        <div>
            <p>I am Inside <i>useContext</i> Function : {mood}</p>
        </div> 
    );
}

function MoodEmojiCons(){
    return (
        <div>
            <MoodContext.Consumer>
                { mood => <p> I am Inside <i>Consumer</i> Function : {mood}</p> }
            </MoodContext.Consumer>
        </div>
    );
}