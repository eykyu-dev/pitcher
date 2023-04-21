import './ButtonGrid.css'

interface Props{
    title: string;
    desc: string;
}

function ButtonGrid(props : Props) {
  return (
    <div>
      <p className='title'>{props.title}</p>
      <p className='desc'>{props.desc}</p>
      <button className='button'></button>
    </div>
  );
}

export default ButtonGrid;