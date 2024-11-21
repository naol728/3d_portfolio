import React, { useEffect, useRef } from 'react';
import { useGraph } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

export default function Model(props) {
  const group = useRef();
  const { scene, animations } = useGLTF('/asian.gltf');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions } = useAnimations(animations, group);

  // Play the animation
  useEffect(() => {
    if (actions && actions.animationName) { // Ensure you use the correct animation name
      actions.animationName.play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1.914}>
          <group name="8c98402edde04d77badb2bb49aac5df0fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_8" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_15" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_17" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_19" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_21" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_26" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_29" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_32" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="CC_Base_Tongue" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="CC_Base_Body" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Spaghetti_strap_Top" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Denim_shorts" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Canvas_shoes" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="CC_Base_Eye" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="CC_Base_Teeth" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="TMDesign_Casual_Hair_55194_Shape" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Bang" rotation={[-Math.PI / 2, 0, 0]} />
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.Std_Tongue} skeleton={nodes.Object_7.skeleton} morphTargetDictionary={nodes.Object_7.morphTargetDictionary} morphTargetInfluences={nodes.Object_7.morphTargetInfluences} />
                  <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.Std_Skin_Head} skeleton={nodes.Object_9.skeleton} morphTargetDictionary={nodes.Object_9.morphTargetDictionary} morphTargetInfluences={nodes.Object_9.morphTargetInfluences} />
                  <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.Std_Skin_Body} skeleton={nodes.Object_10.skeleton} morphTargetDictionary={nodes.Object_10.morphTargetDictionary} morphTargetInfluences={nodes.Object_10.morphTargetInfluences} />
                  <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.Std_Skin_Arm} skeleton={nodes.Object_11.skeleton} morphTargetDictionary={nodes.Object_11.morphTargetDictionary} morphTargetInfluences={nodes.Object_11.morphTargetInfluences} />
                  <skinnedMesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.Std_Skin_Leg} skeleton={nodes.Object_12.skeleton} morphTargetDictionary={nodes.Object_12.morphTargetDictionary} morphTargetInfluences={nodes.Object_12.morphTargetInfluences} />
                  <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.Std_Nails} skeleton={nodes.Object_13.skeleton} morphTargetDictionary={nodes.Object_13.morphTargetDictionary} morphTargetInfluences={nodes.Object_13.morphTargetInfluences} />
                  <skinnedMesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.Std_Eyelash} skeleton={nodes.Object_14.skeleton} morphTargetDictionary={nodes.Object_14.morphTargetDictionary} morphTargetInfluences={nodes.Object_14.morphTargetInfluences} />
                  <skinnedMesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.Std_Eye_R} skeleton={nodes.Object_22.skeleton} morphTargetDictionary={nodes.Object_22.morphTargetDictionary} morphTargetInfluences={nodes.Object_22.morphTargetInfluences} />
                  <skinnedMesh name="Object_23" geometry={nodes.Object_23.geometry} material={materials.Std_Cornea_R} skeleton={nodes.Object_23.skeleton} morphTargetDictionary={nodes.Object_23.morphTargetDictionary} morphTargetInfluences={nodes.Object_23.morphTargetInfluences} />
                  <skinnedMesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials.Std_Eye_L} skeleton={nodes.Object_24.skeleton} morphTargetDictionary={nodes.Object_24.morphTargetDictionary} morphTargetInfluences={nodes.Object_24.morphTargetInfluences} />
                  <skinnedMesh name="Object_25" geometry={nodes.Object_25.geometry} material={materials.Std_Cornea_L} skeleton={nodes.Object_25.skeleton} morphTargetDictionary={nodes.Object_25.morphTargetDictionary} morphTargetInfluences={nodes.Object_25.morphTargetInfluences} />
                  <skinnedMesh name="Object_27" geometry={nodes.Object_27.geometry} material={materials.Std_Upper_Teeth} skeleton={nodes.Object_27.skeleton} morphTargetDictionary={nodes.Object_27.morphTargetDictionary} morphTargetInfluences={nodes.Object_27.morphTargetInfluences} />
                  <skinnedMesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials.Std_Lower_Teeth} skeleton={nodes.Object_28.skeleton} morphTargetDictionary={nodes.Object_28.morphTargetDictionary} morphTargetInfluences={nodes.Object_28.morphTargetInfluences} />
                  <skinnedMesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.Camisole} skeleton={nodes.Object_16.skeleton} />
                  <skinnedMesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.Denim_shorts} skeleton={nodes.Object_18.skeleton} />
                  <skinnedMesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.Canvas_shoes} skeleton={nodes.Object_20.skeleton} />
                  <skinnedMesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials.Skullcap_MAT_Transparency} skeleton={nodes.Object_30.skeleton} />
                  <skinnedMesh name="Object_31" geometry={nodes.Object_31.geometry} material={materials.Hair_MAT_Transparency} skeleton={nodes.Object_31.skeleton} />
                  <skinnedMesh name="Object_33" geometry={nodes.Object_33.geometry} material={materials.Hair_Transparency} skeleton={nodes.Object_33.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/asian.gltf');
