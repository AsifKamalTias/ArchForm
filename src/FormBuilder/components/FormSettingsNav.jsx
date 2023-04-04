const FormSettingsNav = () => {
    return(
        <>
            <nav className="flex items-center h-12 shadow-lg sticky top-0">
                <div className="w-2/12">
                    <h1 className="text-center text-2xl font-semibold text-slate-600">ArchForm</h1>
                </div>
                <div className="flex justify-between items-center px-4 w-10/12">
                    <div className="flex justify-center items-center gap-4">
                        <button className="text-slate-600 font-semibold hover:text-gray-500"><i class="bi bi-gear-fill"></i> Settings</button>
                        <button className="text-slate-600 font-semibold hover:text-gray-500"><i class="bi bi-brush-fill"></i> Themes</button>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <button className="text-slate-600 font-semibold border-2 border-slate-600 rounded p-2 hover:border-white hover:bg-slate-600 hover:text-white"><i class="bi bi-eye-fill"></i> Preview</button>
                        <button className="text-slate-600 font-semibold border-2 border-slate-600 rounded p-2 hover:border-white hover:bg-slate-600 hover:text-white"><i class="bi bi-share-fill"></i> Share</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default FormSettingsNav;
    