import React, { Componet } from "react";

class PostCreate extends Componet {
  render() {
    return (
      <form>
        <div className="from-group">
          <label for="title">Post title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Blog pos"
          />
        </div>
      </form>
    );
  }
}

export default PostCreate;
