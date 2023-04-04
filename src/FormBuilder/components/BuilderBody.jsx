import Dropper from "./Dropper";
import InputItem from "./InputItem";
const BuilderBody = () =>{
    return(
        <main className="flex">
            <div className="w-2/12 h-[calc(100vh-3rem)] bg-slate-600 flex flex-wrap justify-center gap-4 py-3 px-2 overflow-y-auto">
                <InputItem icon_class="bi bi-text-left" input_name="Text"/>
                <InputItem icon_class="bi bi-text-left" input_name="Text"/>
                <InputItem icon_class="bi bi-text-left" input_name="Text"/>
                <InputItem icon_class="bi bi-text-left" input_name="Text"/>
                <InputItem icon_class="bi bi-text-left" input_name="Text"/>
                <InputItem icon_class="bi bi-text-left" input_name="Text"/>
                <InputItem icon_class="bi bi-text-left" input_name="Text"/>
                <InputItem icon_class="bi bi-text-left" input_name="Text"/>
                <InputItem icon_class="bi bi-text-left" input_name="Text"/>
                <InputItem icon_class="bi bi-text-left" input_name="Text"/>
                <InputItem icon_class="bi bi-text-left" input_name="Text"/>
                <InputItem icon_class="bi bi-text-left" input_name="Text"/>
                <InputItem icon_class="bi bi-text-left" input_name="Text"/>
                <InputItem icon_class="bi bi-text-left" input_name="Text"/>
                <InputItem icon_class="bi bi-text-left" input_name="Text"/>
                <InputItem icon_class="bi bi-text-left" input_name="Text"/>
            </div>
            <div className="w-10/12 mx-auto bg-slate-300 h-[calc(100vh-3rem)] overflow-y-auto">
                <div className="flex justify-center">
                    <div className="w-11/12 mt-14 mb-2 rounded bg-white">
                        <Dropper/>
                        <Dropper/>
                        <Dropper/>
                        <Dropper/>
                        <Dropper/>
                        <Dropper/>
                        <Dropper/>
                        <Dropper/>
                        <Dropper/>
                        <Dropper/>
                        <Dropper/>
                        <Dropper/>
                        <Dropper/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BuilderBody;