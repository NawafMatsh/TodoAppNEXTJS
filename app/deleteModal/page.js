export default function DeleteModal({deleteFunc ,visiableState ,closeFunc }) { 
    
    if (visiableState) {
        return (
          <div className="h-screen w-screen flex justify-center items-center absolute bg-black/50">
            <div
              dir="rtl"
              className="bg-amber-950 flex flex-col p-5 h-40 rounded-lg justify-between border"
            >
              <div>
                <h1 className="text-[20px]">متأكد ودك تحذف؟</h1>
                <p className="text-[11px] mt-1">
                  لايمكن استرجاع المحذوفات لاحقاً
                </p>
              </div>

              <div className="flex justify-center items-end">
                <button onClick={deleteFunc} className="bg-amber-400 rounded-md w-20 p-1 border ml-3 hover:scale-110">
                  حذف
                </button>
                <button onClick={closeFunc} className="rounded-md w-20 p-1 border hover:scale-110">
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        );
    }
     
}