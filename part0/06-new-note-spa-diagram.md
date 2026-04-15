sequenceDiagram
participant browser
participant server

    Note right of browser: User inputs a note and clicks Save
    Note right of browser: onSubmit event handler called, which first prevents default handling of form submission
    Note right of browser: Event handler then creates new note and pushes it to notes list
    Note right of browser: Event handler then rerenders notes list
    Note right of browser: Event handler then sends new note to server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of server: Server saves the new note
    server-->>browser: Server responds with status code 201 created
    deactivate server
