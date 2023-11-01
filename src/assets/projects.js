import Mind from "../assets/images/mind_game_preview.png"
import Ttender from "../assets/images/ttender_preview.png"
import Dice from "../assets/images/dice.png"



const projects = [
    {
      id: 1,
      title: "The Mind Game",
      img: Mind,
      description: "Web version of the board card game - 'The Mind'",
      tags: ["React JS","Authentication","SCSS","Protected Routes", "Axios","socket.io","js-cookie"],
      github: "https://github.com/The-MindGame/mind-game",
      link:""
    },
    {
      id: 2,
      title: "ttender",
      img: Ttender,
      description: "Web application aimed to simplify tender operations",
      tags: ["React JS","Styled Components","Material UI","Axios","Authentication"],
      github: "https://github.com/gbsmash/ttender",
      link:""
    },
    {
      id: 3,
      title: "Match the Dice!",
      img: Dice,
      description: "The plot is to get all 10 dices to be the same by freezing ones and rolling the others. Idea originated from tutorial by Bob Zeroll for freeCodeCamp",
      tags: ["React JS","SCSS"],
      github: "https://github.com/gbsmash/rolling-dice-game",
      link: "https://matchindice.netlify.app/"
    }
]

export default projects;