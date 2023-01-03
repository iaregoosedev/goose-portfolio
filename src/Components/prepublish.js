import "./../Styles/prepublish.css"

export default function App() {
    return (
        <div>
            <h1 class="test">Site not yet published.</h1>
            <p>You can view my Figma designs for this website <a class="link" href="https://www.figma.com/file/8AeSRTABrmWvzMmeASMDAl/goose-portfolio?node-id=1%3A2&t=8DTXVc0kJQ8ZrLHs-1" target="_blank">here</a>.</p>
            <iframe class="figma_iframe"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F8AeSRTABrmWvzMmeASMDAl%2Fgoose-portfolio%3Fnode-id%3D1%253A2%26t%3D8DTXVc0kJQ8ZrLHs-1"
                allowfullscreen
            />
            <p>Controls for Figma iframe<br/>Left Click: Pan | ctrl + Scroll Wheel: Zoom</p>
            <p></p>
        </div>
    )
}