import React,{forwardRef} from 'react'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

const ColouredToolTip = () => {
    return <span style={{color:'Yellow'}}>Colored Tip</span>
}

const CustomChild = forwardRef((props,ref) => {
    return (
        <div ref={ref} style={{width :'fit-content '}}>
            <div>First Line</div>
            <div>Second Line</div>
        </div>
    )
})

function Tooltipdemo() {
    return (
        <div>

           <div style={{paddingBottom:'20px'}}>
            <Tippy placement='right' arrow={false} delay={1000} content='Basic Tips'>
                    <button> Hover me </button>
                </Tippy>
           </div>

           <div style={{paddingBottom:'20px'}}>
            <Tippy content={<span style={{color:'orange'}}>Colored Tip</span>}>
                    <button> Hover me </button>
                </Tippy>
           </div>

           <div style={{paddingBottom:'20px'}}>
            <Tippy content={<ColouredToolTip />}>
                    <button> Hover me </button>
                </Tippy>
           </div>

           <div style={{paddingBottom:'20px'}}>
            <Tippy content={<ColouredToolTip />}>
                    <CustomChild />
                </Tippy>
           </div>

        </div>
    )
}

export default Tooltipdemo
