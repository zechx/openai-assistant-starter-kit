import OpenAIAssistant from "@/app/ui/openai-assistant";


export default function Home() {
  return (
    <main>
      <div className="mx-auto mb-12 max-w-lg text-center">
        <div className="m-4">
          <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-neutral-100 md:text-5xl lg:text-5xl">Demo Protocolo Inteligente 
            (Assistant Api + Blumo)</h1>
          <div className="mb-6 text-normal font-normal text-gray-500">
            Esta es una demo ilustrativa de un asistente personalizado de OpenAI, ID: <a href="https://platform.openai.com/assistants/asst_MytRz2ceXk1VuijV2BwRg8Uz" target="_new" className="underline text-yellow-400">asst_MytRz2ceXk1VuijV2BwRg8Uz</a>.  
            El asistente puede ser modificado con el link anterior.  
          </div>
        </div>
        <OpenAIAssistant 
          assistantId="asst_MytRz2ceXk1VuijV2BwRg8Uz"
          greeting="Soy un Asistente Basado en el Protocolo, ¿Como puedo ayudarte?"
        />
      </div>
    </main>
  );
}
