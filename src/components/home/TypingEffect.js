import React, {useState, useEffect} from "react";

function TypingEffect({ messages, start_index = 0, speed = 175, changeInterval = 7500 }) {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [wordIndex, setWordIndex] = useState(start_index);

    useEffect(() => {
        // Reset text when the word changes
        setText("");
        setIndex(0);
    }, [wordIndex, messages]);

    useEffect(() => {
        if (index < messages[wordIndex].length) {
            const timer = setTimeout(() => {
                setText((prevText) => prevText + messages[wordIndex][index]);
                setIndex(index + 1);
            }, speed);
            return () => clearTimeout(timer);
        }
    }, [index, messages, speed, wordIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prevWordIndex) => (prevWordIndex + 1) % messages.length);
        }, changeInterval);
        return () => clearInterval(interval);
    }, [messages.length, changeInterval]);

    return <span>{text}</span>;
}

export default TypingEffect;