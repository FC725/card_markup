import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import GameBoard from './components/layouts/GameBoard';
import Card from './components/Cards/Card';
import Person from './components/persons/Person';
import ActionButton from './components/Action/Action';
import History from './components/history/History';

export default function Home() {
  return (

    <div className={styles.container}>
      <GameBoard>
      </GameBoard>

      <Card card_num={3} card_type='diamonds' x={250} y={220} back={false} rotate={0}>
      </Card>
      <Card card_num={4} card_type='diamonds' x={200} y={220} back={false} rotate={0}>
      </Card>
      <Card card_num={5} card_type='diamonds' x={150} y={220} back={false} rotate={0}>
      </Card>

      <Card card_num={9} card_type='diamonds' x={170} y={300} back={false} rotate={0}>
      </Card>

      <Person x={200} y={50} live_status={0}></Person>
      <div style={{position:'absolute', top : 90, left : 180,fontWeight: 500,color: 'white',textAlign: 'center', opacity : 0.5 }}>
        <div>Guest#129</div>
        <div>2000</div>
      </div>


      <Person x={70} y={150} live_status={0}></Person>
      <div style={{position:'absolute', top : 200, left : 45,fontWeight: 500,color: 'white',textAlign: 'center', opacity : 0.5 }}>
        <div>Guest#129</div>
        <div>2000</div>
      </div>

      <Person x={320} y={150} live_status={0}></Person>
      <div style={{position:'absolute', top : 200, left : 300,fontWeight: 500,color: 'white',textAlign: 'center', opacity : 0.5 }}>
        <div>Guest#129</div>
        <div>2000</div>
      </div>


      <Card card_num={6} card_type='spades' x={50} y={280} back={false} rotate={-10}>
      </Card>
      <Card card_num={7} card_type='hearts' x={70} y={280} back={false} rotate={10}>
      </Card>
      <Person x={70} y={350} live_status={1}></Person>
      <div style={{position:'absolute', top : 390, left : 45,fontWeight: 500,color: 'white',textAlign: 'center', opacity : 1 }}>
        <div>Guest#129</div>
        <div>2000</div>
      </div>


      <Person x={320} y={150} live_status={0}></Person>
      <div style={{position:'absolute', top : 200, left : 300,fontWeight: 500,color: 'white',textAlign: 'center', opacity : 0.5 }}>
        <div>Guest#129</div>
        <div>2000</div>
      </div>



      <Person x={320} y={350} live_status={0}></Person>
      <div style={{position:'absolute', top : 390, left : 300,fontWeight: 500,color: 'white',textAlign: 'center', opacity : 0.5 }}>
        <div>Guest#129</div>
        <div>2000</div>
      </div>
      
      <Card card_num={4} card_type='diamonds' x={180} y={400} back={false} rotate={-10}>
      </Card>
      <Card card_num={10} card_type='spades' x={200} y={400} back={false} rotate={10}>
      </Card>
      <Person x={200} y={450} live_status={1}></Person>
      <div style={{position:'absolute', top : 490, left : 180,fontWeight: 500,color: 'white',textAlign: 'center', opacity : 1 }}>
        <div>Guest#129</div>
        <div>2000</div>
      </div>
      <ActionButton />
      <History />
    </div>
  )
}
