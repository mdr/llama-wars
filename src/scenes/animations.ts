import { ImageKeys } from './asset-keys'

export const AnimationKeys = {
  LLAMA_WALK: 'llama-walk',
  LLAMA_EAT: 'llama-eat',
}

export const LLAMA_WALK: Phaser.Types.Animations.Animation = {
  key: AnimationKeys.LLAMA_WALK,
  frames: [
    { key: ImageKeys.LLAMA_1 } as any,
    { key: ImageKeys.LLAMA_2 },
    { key: ImageKeys.LLAMA_3 },
    { key: ImageKeys.LLAMA_4 },
  ],
  frameRate: 8,
  repeat: -1,
}

export const LLAMA_EAT: Phaser.Types.Animations.Animation = {
  key: AnimationKeys.LLAMA_EAT,
  frames: [
    { key: ImageKeys.LLAMA_EAT_1 } as any,
    { key: ImageKeys.LLAMA_EAT_2 },
    { key: ImageKeys.LLAMA_EAT_3 },
    { key: ImageKeys.LLAMA_EAT_4 },
    { key: ImageKeys.LLAMA_EAT_3 },
    { key: ImageKeys.LLAMA_EAT_4 },
  ],
  frameRate: 4,
  yoyo: true,
}
