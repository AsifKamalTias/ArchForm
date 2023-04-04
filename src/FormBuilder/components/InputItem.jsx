const InputItem = ({icon_class, input_name}) =>{
    return (
        <div className="d-flex flex-col items-center justify-center text-center text-white rounded bg-slate-500 p-4 w-24 h-20 shadow cursor-all-scroll select-none">
            <div>
                <i class={icon_class}></i>
            </div>
            <div>
                <span>{input_name}</span>
            </div>
        </div>
    )
}
export default InputItem;