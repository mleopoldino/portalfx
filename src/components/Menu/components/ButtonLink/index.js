import React from 'react';

function ButtonLink(props){
    //props => {className: "parametro", href:"parametro"}
    //console.log(props);
    
    return(
      <a href={props.href} className={props.className}>
          Novo Vídeo
      </a>
    );
}

export default ButtonLink; 