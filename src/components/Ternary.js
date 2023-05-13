import React from "react";

export default function Ternary() {
    const [messages, setMessage] = React.useState(["first message", "second message"]);

    function body() {
        return (
            messages.length === 0 ?
                <h1>No Messages</h1> :
                <h1>You have {messages.length}  unread {messages.length > 1 ? "messages" : "message"}  </h1>
        )

    }

    return (
        <>
            {/**yukaridaki function u çagirdik,direk bu return ün içine de yazabilirdik ama suan yazdigimiz daha clean */}
            {body()}
        </>
    )
}