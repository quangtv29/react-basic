import React from "react";

class MyComponent extends React.Component {


    state = {
        name: "Quang",
        job: "dev"
    }

    hihi = (event) => {
        this.setState(
            {
                name: event.target.value
            }
        )
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name}
                    onChange={(event) => this.hihi(event)}
                />
                <div>hello MyComponents {this.state.name}</div>
            </div>
        )
    }
}




export { MyComponent };


