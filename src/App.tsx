import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá Mundo 1
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quos
        autem, aperiam corrupti quia quaerat praesentium soluta quas labore
        reiciendis, laudantium, quibusdam nemo. Asperiores blanditiis odio
        accusamus ducimus optio nisi.
      </p>
    </>
  );
}
