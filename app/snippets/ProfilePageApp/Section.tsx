import React, { ReactNode, useContext } from 'react';
import { LevelContext } from './LevelContext';
import './styles.css';

// Define the props type
interface SectionProps {
    children: ReactNode;
    isFancy?: boolean;
}

export default function Section({ children, isFancy = false }: SectionProps) {
    const level = useContext(LevelContext);
    const className = 'section ' + (isFancy ? 'fancy' : '');

    return (
        <section className={className}>
            <LevelContext.Provider value={level + 1}>
                {children}
            </LevelContext.Provider>
        </section>
    );
}
