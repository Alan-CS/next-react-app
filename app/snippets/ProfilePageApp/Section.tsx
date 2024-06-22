import { useContext } from 'react';
import { LevelContext } from './LevelContext';
import './styles.css'

export default function Section({ children, isFancy }) {
    const level = useContext(LevelContext);
    const className = 'section ' + ( isFancy ? 'fancy' : '')
    return (
        <section className={className}>
            <LevelContext.Provider value={level + 1}>
                {children}
            </LevelContext.Provider>
        </section>
    );
}
