import reflex as rx
from webui.state import State  # Assuming State is defined with necessary video handling logic
from webui import styles

def videodisplay():
    """Component for uploading and displaying video segments."""
    color = "#776885"
    # Define the upload and action buttons section
    upload_section = rx.chakra.vstack(
        rx.upload(
            rx.chakra.vstack(
                rx.button("Select File", _hover={"bg": '#5F1A37'}, style=styles.input_style),
                rx.text("Drag and drop Stream here or Click to Select 📀"),
            ),
            border=f"1px dotted {color}",
            padding="50px",
            border_radius="lg"
        ),
        rx.hstack(rx.foreach(rx.selected_files, rx.text)),
        rx.button(
            "Upload",
            on_click=lambda: State.handle_upload(rx.upload_files()),
            bg=color
        ),
        rx.button(
            "Clear",
            on_click=rx.clear_selected_files,
            bg=color
        ),
        spacing="4",
    )
    
    # Define the video display section
    video_display_section = rx.grid(
        rx.foreach(
            State.video_segments,
            lambda url_v: rx.video(url=('/' + url_v), width="100%", height="auto", playing=True, loop=True, controls=True, muted=True)
        ),
        columns="1",
        width="100%",
    )
    
    # Define the message section
    message_section = rx.chakra.text("Hi!", font_size="lg", padding="4")
    
    #returned_section = (video_display_section if len(State.video_segments) >0 else message_section)

    # Combine sections into a split layout
    return rx.chakra.box(
        rx.chakra.hstack(
            rx.chakra.box(upload_section, width="40%", margin="0px", padding="10px", flex_grow="1", text_align="center"),
            rx.chakra.box(video_display_section, width="60%", border_radius="lg", padding="10px", flex_grow="1", text_align="center", bg='rgba(255,255,255, 0.1)'),
            spacing="4",
        ),
        flex_grow="1",
        padding_right="20px",
    )