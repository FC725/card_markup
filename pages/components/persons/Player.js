import Card from './components/Cards/Card';
import Person from './components/persons/Person';


export default function Player(props) {
    return (
        <div>
            {
                (
                    props.live_status && 
                    <div>
                        <Card card_num={props.card[0].card_num} card_type={props.card[0].card_type} x={props.card[0].x} y={props.card[0].y} back={props.card[0].back} rotate={props.card[0].rotate}>
                        </Card>
                        <Card card_num={props.card[1].card_num} card_type={props.card[1].card_type} x={props.card[1].x} y={props.card[1].y} back={props.card[1].back} rotate={props.card[1].rotate}>
                        </Card>
                    </div>
                )
            }
            
            <Person x={props.person.x} y={props.person.y} live_status={props.live_status}></Person>
            <div style={{position:'absolute', top : props.info.y, left : 180,fontWeight: 500,color: 'white',textAlign: 'center', opacity : 1 }}>
                <div>Guest#129</div>
                <div>2000</div>
            </div>
        </div>
    )
}
