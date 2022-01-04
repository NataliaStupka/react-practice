import PaintingList from './components/PaintingList';
import Section from './components/Section';
import paintings from './paintings.json'; //данные (с бекэнда)



export default function App() {
    return (<div>
        
        
        <Section title="Топ недели">
            <PaintingList items={paintings} />
        </Section>

        <Section />

        </div>)
};
            //в PaintingsList передаем проп items данные paintings





// ------------------ "НАЧИНКА" КОМПОНЕНТА (сдесь рендерим наш компонент )