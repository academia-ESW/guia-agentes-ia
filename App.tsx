
import React, { useRef } from 'react';
import { InfoCard } from './components/InfoCard';
import { IconListItem } from './components/IconListItem';
import { 
    RobotIcon, PerceptionIcon, ProcessingIcon, MemoryIcon, ActionIcon, FeedbackIcon,
    ChatbotIcon, VehicleIcon, TradingIcon, SmartHomeIcon, HealthcareIcon,
    GoalIcon, DataSourceIcon, AiModelIcon, DecisionLogicIcon, DeployIcon,
    LlmsIcon, AiFrameworksIcon, DevPlatformsIcon, DatabasesIcon, ApisIcon,
    PrivacyIcon, BiasIcon, ScalabilityIcon, InterpretabilityIcon, DownloadIcon 
} from './components/icons';

declare global {
    interface Window {
        html2canvas: any;
    }
}

const App: React.FC = () => {
    const infographicRef = useRef<HTMLElement>(null);

    const handleDownload = () => {
        if (infographicRef.current) {
            window.html2canvas(infographicRef.current, {
                useCORS: true,
                scale: 2,
                ignoreElements: (element: Element) => element.classList.contains('no-capture')
            }).then((canvas: HTMLCanvasElement) => {
                const image = canvas.toDataURL('image/jpeg', 0.9);
                const link = document.createElement('a');
                link.href = image;
                link.download = 'infografia-agente-ia.jpg';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        }
    };

    return (
        <main ref={infographicRef} className="relative min-h-screen bg-gray-900 bg-gradient-to-br from-[#d41a54] via-[#942079] to-[#3c1a47] font-sans text-white p-4 sm:p-6 md:p-10">
            <button 
                onClick={handleDownload}
                className="no-capture absolute top-4 right-4 sm:top-6 sm:right-6 md:top-10 md:right-10 z-10 bg-white text-black font-bold py-2 px-4 rounded-lg shadow-lg flex items-center gap-2 hover:bg-gray-200 transition-colors"
                aria-label="Descargar infografía como JPG"
            >
                <DownloadIcon className="w-5 h-5" />
                Descargar JPG
            </button>

            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-10 pt-16">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase" style={{ WebkitTextStroke: '2px black', textShadow: '4px 4px 0px #000' }}>
                        AGENTE DE IA
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-bold tracking-wide mt-2 text-white/90">
                        UNA GUÍA COMPLETA
                    </h2>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Left Column */}
                    <div className="lg:col-span-1 space-y-6">
                        <InfoCard title="¿Qué son los Agentes de IA?" className="bg-[#1e61ae]">
                            <div className="flex items-center gap-4">
                                <RobotIcon className="w-20 h-20 text-white/80 flex-shrink-0" />
                                <p className="text-base">
                                    Los agentes de IA son programas inteligentes que perciben, analizan y actúan de forma autónoma para completar tareas utilizando IA y Machine Learning. Aprenden y se adaptan continuamente para mejorar su rendimiento con el tiempo.
                                </p>
                            </div>
                        </InfoCard>
                        <InfoCard title="Tipos de Agentes de IA" className="bg-[#a735a5]">
                            <ul className="space-y-3">
                                <li><strong className="font-semibold">Agentes Reactivos</strong> - Responden instantáneamente a las entradas (sin memoria).</li>
                                <li><strong className="font-semibold">Agentes Deliberativos</strong> - Usan razonamiento y planificación para tareas complejas.</li>
                                <li><strong className="font-semibold">Agentes de Aprendizaje</strong> - Mejoran con el tiempo usando Machine Learning.</li>
                                <li><strong className="font-semibold">Agentes Deliberativos</strong> - Usan razonamiento y planificación para tareas complejas.</li>
                            </ul>
                        </InfoCard>
                        <InfoCard title="Casos de Uso Populares" className="bg-[#c82f3c]">
                            <ul className="space-y-4">
                                <IconListItem icon={<ChatbotIcon />} title="Chatbots de IA" description="Soporte al cliente, asistentes virtuales." />
                                <IconListItem icon={<VehicleIcon />} title="Vehículos Autónomos" description="Tecnología de conducción autónoma." />
                                <IconListItem icon={<TradingIcon />} title="Bots de Trading con IA" description="Predicciones del mercado financiero." />
                                <IconListItem icon={<SmartHomeIcon />} title="Automatización del Hogar" description="Sistemas de control basados en IoT e IA." />
                                <IconListItem icon={<HealthcareIcon />} title="Asistentes de IA en Salud" description="Diagnósticos médicos y atención al paciente." />
                            </ul>
                        </InfoCard>
                    </div>

                    {/* Middle Column */}
                    <div className="lg:col-span-1 space-y-6">
                        <InfoCard title="Componentes Clave de los Agentes de IA" className="bg-[#3e9d4d]">
                            <ul className="space-y-4">
                                <IconListItem icon={<PerceptionIcon />} title="Percepción" description="Recopila datos de entradas (texto, imágenes, voz, sensores)." />
                                <IconListItem icon={<ProcessingIcon />} title="Procesamiento y Razonamiento" description="Analiza y toma decisiones usando IA/ML." />
                                <IconListItem icon={<MemoryIcon />} title="Memoria" description="Almacena interacciones pasadas para aprendizaje y optimización." />
                                <IconListItem icon={<ActionIcon />} title="Ejecución de Acciones" description="Realiza tareas basadas en decisiones." />
                                <IconListItem icon={<FeedbackIcon />} title="Bucle de Retroalimentación" description="Aprende de errores pasados y mejora." />
                            </ul>
                        </InfoCard>
                        <InfoCard title="Agentes de IA vs. Automatización Tradicional" className="bg-[#c82f3c]">
                           <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-black/50">
                                        <tr>
                                            <th className="p-3">Característica</th>
                                            <th className="p-3">Agentes de IA</th>
                                            <th className="p-3">Tradicional</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/20">
                                        <tr>
                                            <td className="p-3 font-semibold">Aprendizaje</td>
                                            <td className="p-3">Sí (con ML)</td>
                                            <td className="p-3">No (basada en reglas)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-semibold">Adaptabilidad</td>
                                            <td className="p-3">Alta (dinámica)</td>
                                            <td className="p-3">Baja (fijos)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-semibold">Decisiones</td>
                                            <td className="p-3">Inteligente</td>
                                            <td className="p-3">Predefinida</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-semibold">Escalabilidad</td>
                                            <td className="p-3">Flexible y escalable</td>
                                            <td className="p-3">Limitada</td>
                                        </tr>
                                    </tbody>
                                </table>
                           </div>
                        </InfoCard>
                    </div>
                    
                    {/* Right Column */}
                    <div className="lg:col-span-1 space-y-6">
                       <InfoCard title="¿Cómo Construir un Agente de IA?" className="bg-[#3e9d4d]">
                           <ul className="space-y-4">
                               <IconListItem icon={<GoalIcon />} title="Definir el Objetivo" description="¿Qué logrará el agente de IA?" />
                               <IconListItem icon={<DataSourceIcon />} title="Elegir la Fuente de Datos" description="APIs, web scraping, feeds en tiempo real." />
                               <IconListItem icon={<AiModelIcon />} title="Seleccionar un Modelo de IA" description="GPT-4, Claude, Mistral, Gemini." />
                               <IconListItem icon={<DecisionLogicIcon />} title="Implementar Lógica de Decisión" description="Usando frameworks (LangChain, CrewAI, AutoGen)." />
                               <IconListItem icon={<DeployIcon />} title="Desplegar y Monitorear" description="OpenAI API, Hugging Face, Alojamiento local." />
                           </ul>
                       </InfoCard>
                       <InfoCard title="Herramientas y Frameworks Esenciales" className="bg-[#5a38a3]">
                           <ul className="space-y-4">
                               <IconListItem icon={<LlmsIcon />} title="LLMs" description="GPT-4, Claude, Gemini, Mistral." />
                               <IconListItem icon={<AiFrameworksIcon />} title="Frameworks de IA" description="LangChain, AutoGen, CrewAI." />
                               <IconListItem icon={<DevPlatformsIcon />} title="Plataformas de Desarrollo" description="OpenAI API, Hugging Face, Make.com." />
                               <IconListItem icon={<DatabasesIcon />} title="Bases de Datos y Almacenamiento" description="Pinecone, Weaviate, PostgreSQL." />
                               <IconListItem icon={<ApisIcon />} title="APIs e Integración" description="Twilio, Zapier, Make.com." />
                           </ul>
                       </InfoCard>
                       <InfoCard title="Desafíos en el Desarrollo" className="bg-[#a735a5]">
                           <ul className="space-y-4">
                               <IconListItem icon={<PrivacyIcon />} title="Privacidad de Datos" description="Asegurar el manejo seguro de datos." />
                               <IconListItem icon={<BiasIcon />} title="Sesgo en la IA" description="Evitar decisiones injustas o imprecisas." />
                               <IconListItem icon={<ScalabilityIcon />} title="Escalabilidad" description="Gestionar tareas a gran escala." />
                               <IconListItem icon={<InterpretabilityIcon />} title="Interpretabilidad" description="Hacer las decisiones de IA explicables y transparentes." />
                           </ul>
                       </InfoCard>
                    </div>
                </div>

                <footer className="text-center mt-10 p-6 bg-black/30 rounded-lg">
                    <p className="text-lg text-white/80">
                        Autor original: Denis Panjuta. Adaptada por Evaluando Software.
                    </p>
                </footer>
            </div>
        </main>
    );
};

export default App;
