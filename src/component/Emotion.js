import React, {Component} from 'react';
import Level from '../Level';
import '../Emotion.css';
import Bubble from './Bubble';
import Face from './FaceComponent';


class Emotion extends Component {
    state = {
        feelingIndex: 0,
        animate: '',
        current: 0
    };

    getFeelings = () => [
        {
            feeling: 'love',
            levels: {
                dopamine: 93,
                serotonin: 93,
                oxytocin: 93
            }
        },
        {
            feeling: 'Sad',
            levels: {
                dopamine: 28,
                serotonin: 14,
                oxytocin: 3
            }
        },
        {
            feeling: 'happiness',
            levels: {
                dopamine: 3,
                serotonin: 100,
                oxytocin: 7
            }
        },
        {
            feeling: 'anxiety',
            levels: {
                dopamine: 20,
                serotonin: 3,
                oxytocin: 3
            }
        }
    ];

    changeFeeling = () => {
        let start = Date.now();
        this.setState({feelingIndex: this.state.current, animate: 'animate'});
        this.setState({current: this.state.current + 1});
        if (this.state.current === this.getFeelings().length) {
            this.setState({current: 0});
        }
        setTimeout(() => {
            let end = Date.now() - start;
            if (end > 3950) {
                this.setState({animate: ''});
            }
        }, 4000)
    }

    setInterval = () => {
        this.changeFeeling();
        setInterval(this.changeFeeling, 4500);
    }

    componentDidMount() {
        this.setInterval();
    }

    render() {
        const {feelingIndex, animate} = this.state;
        const feeling = this.getFeelings()[feelingIndex];
        const feelingName = feeling.feeling;
        const levels = feeling.levels;
        return (
            <div className="App">
             <Face/>
                <h1 className={animate}>{feelingName}</h1>
                <div className="tubes-wrapper">
                    { Object.keys(levels).map((level, index) => <Level key={index} animate={animate} levelName={level}
                                                                       percentage={levels[level]}></Level>) }
                </div>
               
            <Bubble/>
            </div>
        );
    }
}

export default Emotion;