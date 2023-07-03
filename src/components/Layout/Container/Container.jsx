import cn from 'classnames';

const Container = (props) => (
  <div className={cn("container", props.className)}>
    {props.children}
  </div>
)

export default Container;
