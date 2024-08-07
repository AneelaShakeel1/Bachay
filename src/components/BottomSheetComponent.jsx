import React, { useRef } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Colors } from '../constants/theme';

const BottomSheetComponent = ({ Component, onPressMenu, HEIGHT, setClose, BGSheetColor }) => {

    const refRBSheet = useRef();

    React.useEffect(() => {
        refRBSheet.current.open()
    })

    setClose ? refRBSheet.current.close() : null

    return (
        <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            openDuration={60}
            closeOnPressMask={true}
            onClose={onPressMenu}
            animationType='slide'
            customStyles={{
                wrapper: {
                    backgroundColor: 'rgba(255, 255, 255)',
                },
                draggableIcon: {
                    backgroundColor: Colors.AppColor,
                    width: 60
                },
                container: {
                    backgroundColor: BGSheetColor,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    height: HEIGHT ? HEIGHT : 250,
                    borderColor: Colors.RomanSilver,
                    borderTopWidth: 2,
                    borderLeftWidth: 2,
                    borderRightWidth: 2
                },
            }}>

            <Component />

        </RBSheet>
    )
}

export default BottomSheetComponent;