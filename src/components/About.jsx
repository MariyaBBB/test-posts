import React from "react";
import { Card, Image } from "react-bootstrap";

export default function About() {
    return (
        <>
            <Card className="d-grid" style={{ gridTemplateColumns: 'auto 1fr',  textAlign: 'left'}}>
                <Image 
                    width={'300rem'} 
                    className="m-3"
                    src='https://sun9-16.userapi.com/impg/Hja4Fu1TAOft3vUIcM7t-1ZXWfUwaSgJ_f5N6g/NLWYougZTSw.jpg?size=960x1280&quality=95&sign=334b10eb0aab07a747e4c40ff455a2d8&type=album'></Image>
                <Card.Body>
                    <Card.Title>
                        Моисеева Мария Александровна
                    </Card.Title>
                    <Card.Text>
                    <p>Я изучаю frontend разработку. Проходила курсы Javascript, Typescript, Tailwind, CSS, HTML, git, Vue, React, React NodeJS. </p>

<p>Умею настраивать окружение, работать с компонентами, верстать макет из Figma.  Изучила и использую CSS Flex, CSS Grid Styled-Components. </p>

Умею работать с Git. Также есть базовые знания SQL. <br />

<p>Мне нравится проводить время за кодом, решать задания, искать варианты решений, таким образом я обучаюсь. 
Ищу работу, которая позволит мне развиваться в данном направлении, использовать полученные знания. Умею самостоятельно находить нужную информацию, разбираться и использовать новое. </p>

Нацелена на развитие и получение опыта в frontend разработке
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}