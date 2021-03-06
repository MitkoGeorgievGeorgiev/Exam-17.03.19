import React from 'react'
import { Link } from 'react-router-dom'
class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.resetState()
    }
    render() {
        return (
            <div className='welcome'>
                <h2>Добре дошли в <br></br> </h2>
                <h1 className="red">MyProdavalnik</h1>
                <h2>Тук можете лесно,бързо и удобно да продаде ненужните си вещи!</h2>
                <p>(...или да си купите такива :D)</p>
                {localStorage.name
                    ? <span className='center-right'>
                        <Link type='button' to='/posts/create'>Публикувай обява</Link>
                      </span>
                    : null}
                <br></br>
                <img className='center' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXyBuOdNsYJBGS6bZEHH4fYpldSlADmWCLtWB9FevbjC4VrsPB" alt="" />
            </div>
        )
    }
}
export default Home