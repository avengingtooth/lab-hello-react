import declarative from '../images/declarative.png'
import jsx from '../images/jsx.png'
import singleWay from '../images/singleWay.png'
import components from '../images/components.png'

function Info(){
    return(
        <div className='infographic'>
            <div>
                <img src={declarative} alt="declative logo" />
                <h1>Declaritive</h1>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div>
                <img src={components} alt="components logo" />
                <h1>Components</h1>
                <p>Build encapsulated that manage their state.</p>
            </div>
            <div>
                <img src={singleWay} alt="single way logo" />
                <h1>Single-Way</h1>
                <p>A set of immutable values are passed to the component's.</p>
            </div>
            <div>
                <img src={jsx} alt="jsx logo" />
                <h1>JSX</h1>
                <p>Statically-typed designed to run on modern browsers.</p>
            </div>
        </div>
    )
}

export default Info