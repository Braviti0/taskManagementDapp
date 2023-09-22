import React from 'react'

function Header(props) {
    const styles = {
        title: {
            color: "white",
            backgroundColor: "turquoise",
            borderRadius: "10px",
            margin: "0px",
            fontSize: "20px",
        },
    };
    
  return (
    <div >
      <h1 style={styles.title}>{props.title}</h1>
    </div>
  );
}

export default Header