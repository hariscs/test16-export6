import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout5 from '../layouts/Layout-5';
import Script from 'next/script';
import WidgetScript from '@/components/WidgetScript';

const gridData0 = [
  {
    "image": "/images/1df783f4a60896112313a25ec4301e2f.webp"
  },
  {
    "image": "/images/9b550a5aaaa3353620c6713af1209cac.webp"
  },
  {
    "image": "/images/b6282a5dd9f8a9fb34d871a387e6a954.webp"
  },
  {
    "image": "/images/f7c42240235b42772ef3afe5cd339633.webp"
  },
  {
    "image": "/images/dee690a225b8fbbf809aba8f3cf03c01.webp"
  },
  {
    "image": "/images/760a675ce5fb5cdf787e8be5cfa9a545.webp"
  },
  {
    "image": "/images/1d7e387141dd6bb4355035100570fe63.webp"
  },
  {
    "image": "/images/5654a59e93dd402ddf72d0c5cfd5771a.webp"
  },
  {
    "image": "/images/111c395db30f4a99e6edce34bb11bb49.webp"
  },
  {
    "image": "/images/3f56c27898acfd4cbd63a9acaf3907f3.webp"
  },
  {
    "image": "/images/2c0fa2733032fe0d63ce7b81fbd1f72e.webp"
  },
  {
    "image": "/images/9cf42f7b96f84041da87fe23435bbd6a.webp"
  },
  {
    "image": "/images/c395e36c0be13af667981d1575d06edc.webp"
  },
  {
    "image": "/images/2164fd0f1a8db53445368cd69350607c.webp"
  },
  {
    "image": "/images/ea4919050e98bc874486401dab44e03e.webp"
  },
  {
    "image": "/images/9b75efc40c6ce217121014d05e4d8a8c.webp"
  },
  {
    "image": "/images/73b1ab2f5af27af587521270091bc75e.webp"
  },
  {
    "image": "/images/6e3cbaa5c4aa88a54eefd1c813fe3a40.webp"
  },
  {
    "image": "/images/278e68d2f1ae783530d66597c6eb188e.webp"
  },
  {
    "image": "/images/51263335abf05d174f81a371be52396e.webp"
  },
  {
    "image": "/images/d48c398992558dad6a39b001e99ab110.webp"
  },
  {
    "image": "/images/6b7aa15a6c106b0e6d6d5b9688ab3ae9.webp"
  },
  {
    "image": "/images/620534a7a8f9883cbcc71a67b42dcb8e.webp"
  },
  {
    "image": "/images/2722d1cf738da550ccb849e8a81c424d.webp"
  },
  {
    "image": "/images/3f56c27898acfd4cbd63a9acaf3907f3.webp"
  },
  {
    "image": "/images/2eba8293438c077c48b133e558131250.webp"
  },
  {
    "image": "/images/ad6d9656f64edb8e9988b7acddf9c93a.webp"
  },
  {
    "image": "/images/722531f1d625b42b09773f1a8268ccef.webp"
  },
  {
    "image": "/images/ce2b1c71133d90a5c70a3e20e4abc205.webp"
  },
  {
    "image": "/images/8e597f63d90cd2e91bcb5cae523ea2f3.webp"
  },
  {
    "image": "/images/d5a6ed2c8fd6e1afa138c130de1f9936.webp"
  },
  {
    "image": "/images/e4b5fc3262a2b8e9101b7b4d7f35cc8d.webp"
  },
  {
    "image": "/images/41207a5ce6feffe2bd1f849fc5c572ae.webp"
  },
  {
    "image": "/images/5975454b495f8e83f9333c3d5e7b0d79.webp"
  },
  {
    "image": "/images/70e01c08097e1d067ebefd1fdba04b8c.webp"
  },
  {
    "image": "/images/c6a73b926b0aa74403fa7b8886ea6eaa.webp"
  },
  {
    "image": "/images/73a891a6638ebc0fd1e706dbb1f00257.webp"
  },
  {
    "image": "/images/ce1c0daa6c15f83efb735b619adc9370.webp"
  },
  {
    "image": "/images/1df783f4a60896112313a25ec4301e2f.webp"
  },
  {
    "image": "/images/9b550a5aaaa3353620c6713af1209cac.webp"
  },
  {
    "image": "/images/b6282a5dd9f8a9fb34d871a387e6a954.webp"
  },
  {
    "image": "/images/f7c42240235b42772ef3afe5cd339633.webp"
  },
  {
    "image": "/images/dee690a225b8fbbf809aba8f3cf03c01.webp"
  },
  {
    "image": "/images/760a675ce5fb5cdf787e8be5cfa9a545.webp"
  },
  {
    "image": "/images/1d7e387141dd6bb4355035100570fe63.webp"
  },
  {
    "image": "/images/5654a59e93dd402ddf72d0c5cfd5771a.webp"
  },
  {
    "image": "/images/111c395db30f4a99e6edce34bb11bb49.webp"
  },
  {
    "image": "/images/3f56c27898acfd4cbd63a9acaf3907f3.webp"
  },
  {
    "image": "/images/2c0fa2733032fe0d63ce7b81fbd1f72e.webp"
  },
  {
    "image": "/images/9cf42f7b96f84041da87fe23435bbd6a.webp"
  },
  {
    "image": "/images/c395e36c0be13af667981d1575d06edc.webp"
  },
  {
    "image": "/images/2164fd0f1a8db53445368cd69350607c.webp"
  },
  {
    "image": "/images/ea4919050e98bc874486401dab44e03e.webp"
  },
  {
    "image": "/images/9b75efc40c6ce217121014d05e4d8a8c.webp"
  },
  {
    "image": "/images/73b1ab2f5af27af587521270091bc75e.webp"
  },
  {
    "image": "/images/6e3cbaa5c4aa88a54eefd1c813fe3a40.webp"
  },
  {
    "image": "/images/278e68d2f1ae783530d66597c6eb188e.webp"
  },
  {
    "image": "/images/51263335abf05d174f81a371be52396e.webp"
  },
  {
    "image": "/images/d48c398992558dad6a39b001e99ab110.webp"
  },
  {
    "image": "/images/6b7aa15a6c106b0e6d6d5b9688ab3ae9.webp"
  },
  {
    "image": "/images/620534a7a8f9883cbcc71a67b42dcb8e.webp"
  },
  {
    "image": "/images/2722d1cf738da550ccb849e8a81c424d.webp"
  },
  {
    "image": "/images/3f56c27898acfd4cbd63a9acaf3907f3.webp"
  },
  {
    "image": "/images/2eba8293438c077c48b133e558131250.webp"
  },
  {
    "image": "/images/ad6d9656f64edb8e9988b7acddf9c93a.webp"
  },
  {
    "image": "/images/722531f1d625b42b09773f1a8268ccef.webp"
  },
  {
    "image": "/images/ce2b1c71133d90a5c70a3e20e4abc205.webp"
  },
  {
    "image": "/images/8e597f63d90cd2e91bcb5cae523ea2f3.webp"
  },
  {
    "image": "/images/d5a6ed2c8fd6e1afa138c130de1f9936.webp"
  },
  {
    "image": "/images/e4b5fc3262a2b8e9101b7b4d7f35cc8d.webp"
  },
  {
    "image": "/images/41207a5ce6feffe2bd1f849fc5c572ae.webp"
  },
  {
    "image": "/images/5975454b495f8e83f9333c3d5e7b0d79.webp"
  },
  {
    "image": "/images/70e01c08097e1d067ebefd1fdba04b8c.webp"
  },
  {
    "image": "/images/c6a73b926b0aa74403fa7b8886ea6eaa.webp"
  },
  {
    "image": "/images/73a891a6638ebc0fd1e706dbb1f00257.webp"
  },
  {
    "image": "/images/ce1c0daa6c15f83efb735b619adc9370.webp"
  },
  {
    "image": "/images/1df783f4a60896112313a25ec4301e2f.webp"
  },
  {
    "image": "/images/9b550a5aaaa3353620c6713af1209cac.webp"
  },
  {
    "image": "/images/b6282a5dd9f8a9fb34d871a387e6a954.webp"
  },
  {
    "image": "/images/f7c42240235b42772ef3afe5cd339633.webp"
  },
  {
    "image": "/images/dee690a225b8fbbf809aba8f3cf03c01.webp"
  },
  {
    "image": "/images/760a675ce5fb5cdf787e8be5cfa9a545.webp"
  },
  {
    "image": "/images/1d7e387141dd6bb4355035100570fe63.webp"
  },
  {
    "image": "/images/5654a59e93dd402ddf72d0c5cfd5771a.webp"
  },
  {
    "image": "/images/111c395db30f4a99e6edce34bb11bb49.webp"
  },
  {
    "image": "/images/3f56c27898acfd4cbd63a9acaf3907f3.webp"
  },
  {
    "image": "/images/2c0fa2733032fe0d63ce7b81fbd1f72e.webp"
  },
  {
    "image": "/images/9cf42f7b96f84041da87fe23435bbd6a.webp"
  },
  {
    "image": "/images/c395e36c0be13af667981d1575d06edc.webp"
  },
  {
    "image": "/images/2164fd0f1a8db53445368cd69350607c.webp"
  },
  {
    "image": "/images/ea4919050e98bc874486401dab44e03e.webp"
  },
  {
    "image": "/images/9b75efc40c6ce217121014d05e4d8a8c.webp"
  },
  {
    "image": "/images/73b1ab2f5af27af587521270091bc75e.webp"
  },
  {
    "image": "/images/6e3cbaa5c4aa88a54eefd1c813fe3a40.webp"
  },
  {
    "image": "/images/278e68d2f1ae783530d66597c6eb188e.webp"
  },
  {
    "image": "/images/51263335abf05d174f81a371be52396e.webp"
  },
  {
    "image": "/images/d48c398992558dad6a39b001e99ab110.webp"
  },
  {
    "image": "/images/6b7aa15a6c106b0e6d6d5b9688ab3ae9.webp"
  },
  {
    "image": "/images/620534a7a8f9883cbcc71a67b42dcb8e.webp"
  },
  {
    "image": "/images/2722d1cf738da550ccb849e8a81c424d.webp"
  },
  {
    "image": "/images/3f56c27898acfd4cbd63a9acaf3907f3.webp"
  },
  {
    "image": "/images/2eba8293438c077c48b133e558131250.webp"
  },
  {
    "image": "/images/ad6d9656f64edb8e9988b7acddf9c93a.webp"
  },
  {
    "image": "/images/722531f1d625b42b09773f1a8268ccef.webp"
  },
  {
    "image": "/images/ce2b1c71133d90a5c70a3e20e4abc205.webp"
  },
  {
    "image": "/images/8e597f63d90cd2e91bcb5cae523ea2f3.webp"
  },
  {
    "image": "/images/d5a6ed2c8fd6e1afa138c130de1f9936.webp"
  },
  {
    "image": "/images/e4b5fc3262a2b8e9101b7b4d7f35cc8d.webp"
  },
  {
    "image": "/images/41207a5ce6feffe2bd1f849fc5c572ae.webp"
  },
  {
    "image": "/images/5975454b495f8e83f9333c3d5e7b0d79.webp"
  },
  {
    "image": "/images/70e01c08097e1d067ebefd1fdba04b8c.webp"
  },
  {
    "image": "/images/c6a73b926b0aa74403fa7b8886ea6eaa.webp"
  },
  {
    "image": "/images/73a891a6638ebc0fd1e706dbb1f00257.webp"
  },
  {
    "image": "/images/ce1c0daa6c15f83efb735b619adc9370.webp"
  }
] as const;

const gridData1 = [
  {
    "image": "/images/cc46ae174eab28f0444dbd2748ae4b58.webp"
  },
  {
    "image": "/images/fceafdc892e10f6d12d64dea059354bc.webp"
  },
  {
    "image": "/images/609b20a1faabcae4dbbcd2aa5537b09b.webp"
  },
  {
    "image": "/images/f2c30216b9a5c4bacf37ecca30093425.webp"
  },
  {
    "image": "/images/73e621ba42bd56655756aabadf8d9497.webp"
  },
  {
    "image": "/images/d2214c40e1219a325479bc344c0eaeb0.webp"
  },
  {
    "image": "/images/ef236aaa9e63fbed0590a57b368f128e.webp"
  },
  {
    "image": "/images/93f7354d6523dc5149a4ea28f2cd832a.webp"
  },
  {
    "image": "/images/0a24cc821369e8a8f73a2861a9e2a559.webp"
  },
  {
    "image": "/images/e3346b1e726c2fae527400265087f19c.webp"
  },
  {
    "image": "/images/f464f3463656907bb4b51a920412b40d.webp"
  },
  {
    "image": "/images/d12de4930729129c35f12d161b94f2e0.webp"
  },
  {
    "image": "/images/829f89b588ee20885d8a15d548f5551f.webp"
  },
  {
    "image": "/images/aeb07c7496e2b800c737b93748766be5.webp"
  },
  {
    "image": "/images/f22a45278e5c1e0a627d04f528c12e0c.webp"
  },
  {
    "image": "/images/da3c20e98f32e39b79715a80466a9968.webp"
  },
  {
    "image": "/images/85808f133d70c3ec8aad7e0e7be2f52e.webp"
  },
  {
    "image": "/images/d2e26359373d0dabeeb78a0c53b4d3fa.webp"
  },
  {
    "image": "/images/2f9d40341ff0c58c5e127e1667d47098.webp"
  },
  {
    "image": "/images/401762e5126194f688e56be06aeb7bb2.webp"
  },
  {
    "image": "/images/9717c740f8cee5cf07ae66473b011256.webp"
  },
  {
    "image": "/images/2a3b3f93e33ef1e87a5163eb51f0dd27.webp"
  },
  {
    "image": "/images/f6be710e3a2eaf0503a004f0f6b5e957.webp"
  },
  {
    "image": "/images/62889778285ca683379e82c50cef3169.webp"
  },
  {
    "image": "/images/b91d2a41ca7f2a1ffe34b864076bee2d.webp"
  },
  {
    "image": "/images/ac7bf1498cb2ae60430cc82ab1d51251.webp"
  },
  {
    "image": "/images/69ea530995bcff4f014fb23ac4678aaa.webp"
  },
  {
    "image": "/images/2eac20d739c8a775eef9ee048ef28033.webp"
  },
  {
    "image": "/images/1acd0cae621b4a0525a24e43dd9213bf.webp"
  },
  {
    "image": "/images/61fa458cc9844352d78861142a5347a4.webp"
  },
  {
    "image": "/images/13a341e95e9ddb140590ecb7f47f77ed.webp"
  },
  {
    "image": "/images/ca24610234f40b026017a33919c5a483.webp"
  },
  {
    "image": "/images/28ab210d5c1b5c813fdab27ef76913c1.webp"
  },
  {
    "image": "/images/e4fc98fb96f98873d2ceaa9133270d3e.webp"
  },
  {
    "image": "/images/5087439ec9828631afaf7d73c0b02319.webp"
  },
  {
    "image": "/images/5d4ce3bdd7b4f75bc2553dac6b9a235b.webp"
  },
  {
    "image": "/images/baf5ac794225ff982da355dfb022fcb8.webp"
  },
  {
    "image": "/images/cc46ae174eab28f0444dbd2748ae4b58.webp"
  },
  {
    "image": "/images/fceafdc892e10f6d12d64dea059354bc.webp"
  },
  {
    "image": "/images/609b20a1faabcae4dbbcd2aa5537b09b.webp"
  },
  {
    "image": "/images/f2c30216b9a5c4bacf37ecca30093425.webp"
  },
  {
    "image": "/images/73e621ba42bd56655756aabadf8d9497.webp"
  },
  {
    "image": "/images/d2214c40e1219a325479bc344c0eaeb0.webp"
  },
  {
    "image": "/images/ef236aaa9e63fbed0590a57b368f128e.webp"
  },
  {
    "image": "/images/93f7354d6523dc5149a4ea28f2cd832a.webp"
  },
  {
    "image": "/images/0a24cc821369e8a8f73a2861a9e2a559.webp"
  },
  {
    "image": "/images/e3346b1e726c2fae527400265087f19c.webp"
  },
  {
    "image": "/images/f464f3463656907bb4b51a920412b40d.webp"
  },
  {
    "image": "/images/d12de4930729129c35f12d161b94f2e0.webp"
  },
  {
    "image": "/images/829f89b588ee20885d8a15d548f5551f.webp"
  },
  {
    "image": "/images/aeb07c7496e2b800c737b93748766be5.webp"
  },
  {
    "image": "/images/f22a45278e5c1e0a627d04f528c12e0c.webp"
  },
  {
    "image": "/images/da3c20e98f32e39b79715a80466a9968.webp"
  },
  {
    "image": "/images/85808f133d70c3ec8aad7e0e7be2f52e.webp"
  },
  {
    "image": "/images/d2e26359373d0dabeeb78a0c53b4d3fa.webp"
  },
  {
    "image": "/images/2f9d40341ff0c58c5e127e1667d47098.webp"
  },
  {
    "image": "/images/401762e5126194f688e56be06aeb7bb2.webp"
  },
  {
    "image": "/images/9717c740f8cee5cf07ae66473b011256.webp"
  },
  {
    "image": "/images/2a3b3f93e33ef1e87a5163eb51f0dd27.webp"
  },
  {
    "image": "/images/f6be710e3a2eaf0503a004f0f6b5e957.webp"
  },
  {
    "image": "/images/62889778285ca683379e82c50cef3169.webp"
  },
  {
    "image": "/images/b91d2a41ca7f2a1ffe34b864076bee2d.webp"
  },
  {
    "image": "/images/ac7bf1498cb2ae60430cc82ab1d51251.webp"
  },
  {
    "image": "/images/69ea530995bcff4f014fb23ac4678aaa.webp"
  },
  {
    "image": "/images/2eac20d739c8a775eef9ee048ef28033.webp"
  },
  {
    "image": "/images/1acd0cae621b4a0525a24e43dd9213bf.webp"
  },
  {
    "image": "/images/61fa458cc9844352d78861142a5347a4.webp"
  },
  {
    "image": "/images/13a341e95e9ddb140590ecb7f47f77ed.webp"
  },
  {
    "image": "/images/ca24610234f40b026017a33919c5a483.webp"
  },
  {
    "image": "/images/28ab210d5c1b5c813fdab27ef76913c1.webp"
  },
  {
    "image": "/images/e4fc98fb96f98873d2ceaa9133270d3e.webp"
  },
  {
    "image": "/images/5087439ec9828631afaf7d73c0b02319.webp"
  },
  {
    "image": "/images/5d4ce3bdd7b4f75bc2553dac6b9a235b.webp"
  },
  {
    "image": "/images/baf5ac794225ff982da355dfb022fcb8.webp"
  },
  {
    "image": "/images/cc46ae174eab28f0444dbd2748ae4b58.webp"
  },
  {
    "image": "/images/fceafdc892e10f6d12d64dea059354bc.webp"
  },
  {
    "image": "/images/609b20a1faabcae4dbbcd2aa5537b09b.webp"
  },
  {
    "image": "/images/f2c30216b9a5c4bacf37ecca30093425.webp"
  },
  {
    "image": "/images/73e621ba42bd56655756aabadf8d9497.webp"
  },
  {
    "image": "/images/d2214c40e1219a325479bc344c0eaeb0.webp"
  },
  {
    "image": "/images/ef236aaa9e63fbed0590a57b368f128e.webp"
  },
  {
    "image": "/images/93f7354d6523dc5149a4ea28f2cd832a.webp"
  },
  {
    "image": "/images/0a24cc821369e8a8f73a2861a9e2a559.webp"
  },
  {
    "image": "/images/e3346b1e726c2fae527400265087f19c.webp"
  },
  {
    "image": "/images/f464f3463656907bb4b51a920412b40d.webp"
  },
  {
    "image": "/images/d12de4930729129c35f12d161b94f2e0.webp"
  },
  {
    "image": "/images/829f89b588ee20885d8a15d548f5551f.webp"
  },
  {
    "image": "/images/aeb07c7496e2b800c737b93748766be5.webp"
  },
  {
    "image": "/images/f22a45278e5c1e0a627d04f528c12e0c.webp"
  },
  {
    "image": "/images/da3c20e98f32e39b79715a80466a9968.webp"
  },
  {
    "image": "/images/85808f133d70c3ec8aad7e0e7be2f52e.webp"
  },
  {
    "image": "/images/d2e26359373d0dabeeb78a0c53b4d3fa.webp"
  },
  {
    "image": "/images/2f9d40341ff0c58c5e127e1667d47098.webp"
  },
  {
    "image": "/images/401762e5126194f688e56be06aeb7bb2.webp"
  },
  {
    "image": "/images/9717c740f8cee5cf07ae66473b011256.webp"
  },
  {
    "image": "/images/2a3b3f93e33ef1e87a5163eb51f0dd27.webp"
  },
  {
    "image": "/images/f6be710e3a2eaf0503a004f0f6b5e957.webp"
  },
  {
    "image": "/images/62889778285ca683379e82c50cef3169.webp"
  },
  {
    "image": "/images/b91d2a41ca7f2a1ffe34b864076bee2d.webp"
  },
  {
    "image": "/images/ac7bf1498cb2ae60430cc82ab1d51251.webp"
  },
  {
    "image": "/images/69ea530995bcff4f014fb23ac4678aaa.webp"
  },
  {
    "image": "/images/2eac20d739c8a775eef9ee048ef28033.webp"
  },
  {
    "image": "/images/1acd0cae621b4a0525a24e43dd9213bf.webp"
  },
  {
    "image": "/images/61fa458cc9844352d78861142a5347a4.webp"
  },
  {
    "image": "/images/13a341e95e9ddb140590ecb7f47f77ed.webp"
  },
  {
    "image": "/images/ca24610234f40b026017a33919c5a483.webp"
  },
  {
    "image": "/images/28ab210d5c1b5c813fdab27ef76913c1.webp"
  },
  {
    "image": "/images/e4fc98fb96f98873d2ceaa9133270d3e.webp"
  },
  {
    "image": "/images/5087439ec9828631afaf7d73c0b02319.webp"
  },
  {
    "image": "/images/5d4ce3bdd7b4f75bc2553dac6b9a235b.webp"
  },
  {
    "image": "/images/baf5ac794225ff982da355dfb022fcb8.webp"
  }
] as const;

const gridData2 = [
  {
    "image": "/images/b7960d4402d3580ee6d48f56a12348cf.webp"
  },
  {
    "image": "/images/432e4773c30fa869232befe0e1e53e53.webp"
  },
  {
    "image": "/images/0cbb6a6b4aac5671baa2ce5c33458f85.webp"
  },
  {
    "image": "/images/c3594fa236afa9c80cc5d8442439cba7.webp"
  },
  {
    "image": "/images/fe4fbfa17ca9daf5f7b82c0430c4785a.webp"
  },
  {
    "image": "/images/0cbb6a6b4aac5671baa2ce5c33458f85.webp"
  },
  {
    "image": "/images/00fb1f513e1cda36b01e42a3c11add02.webp"
  },
  {
    "image": "/images/4fd003bfb7da59a57bca973251ad554c.webp"
  }
] as const;

const gridData3 = [
  {
    "image": "/images/bb220c670ebdbaa77b7cd88b34cdb22a.webp"
  },
  {
    "image": "/images/336970bddc7255f95c6e04df9ca4bf2b.webp"
  },
  {
    "image": "/images/e99586336d07d2a2c3f97ec4864b4da2.webp"
  },
  {
    "image": "/images/ed63a55809cacb190a3b21cff1e03e66.webp"
  },
  {
    "image": "/images/933d37b3ba6805fdbb0a67a20b42e09a.webp"
  },
  {
    "image": "/images/2733ed4120e3d0529e203e2dd0af5ead.webp"
  },
  {
    "image": "/images/2a33cc2dc50801bf17377f51462a0ae3.webp"
  },
  {
    "image": "/images/162adbf51612c12445f91794968d69a9.webp"
  }
] as const;

const gridData4 = [
  {
    "image": "/images/f505964c177a69146192e5559058e3da.webp"
  },
  {
    "image": "/images/6f624745dd97e8428a01e342d27ed7a2.webp"
  },
  {
    "image": "/images/7273bdcc763a85cf7ae9a43eb8535f4f.webp"
  },
  {
    "image": "/images/a76cd3ff84266e7d5a8dcc86305ba9c2.webp"
  },
  {
    "image": "/images/d10c73aa1fa483157582b66ed2e55319.webp"
  },
  {
    "image": "/images/8ef4be5b1eb61a86021ae3ead4f02315.webp"
  },
  {
    "image": "/images/a214d279cfe7d959bf80e8a27b27918e.webp"
  },
  {
    "image": "/images/572e6348d025876a94eac9ce30c3569c.webp"
  },
  {
    "image": "/images/98f327805cddb59f0a2eb52d913859d9.webp"
  },
  {
    "image": "/images/5a3c5f515310c093aa598c7514911d65.webp"
  },
  {
    "image": "/images/c77c4a6cf54b3c8765d2855f99fb3634.webp"
  }
] as const;

const gridData5 = [
  {
    "image": "/images/4f34b7eac0ce85f6828806525225be6c.webp"
  },
  {
    "image": "/images/304bb6ea8f21d9fa2287ab765c43ee1e.webp"
  },
  {
    "image": "/images/946aa97dbe182f59763a6de564f2196e.webp"
  },
  {
    "image": "/images/9da4f889aa6880ae8f7f8ff20f52b4c4.webp"
  },
  {
    "image": "/images/83bf05f8a3b09bf31dd403bc769ff2d1.webp"
  },
  {
    "image": "/images/7700910d36bc69151cdc7f46bd691df4.webp"
  }
] as const;

const gridData6 = [
  {
    "image": "/images/13305cb852f95a339edf946f836e3878.webp"
  },
  {
    "image": "/images/9150beb4266bf78401267cd95f473878.webp"
  },
  {
    "image": "/images/42c8ea9744d5ec2ead3e04fe134a71b9.webp"
  },
  {
    "image": "/images/d78c0d3abb9051d39201e6c2c2f15615.webp"
  }
] as const;

const gridData7 = [
  {
    "image": "/images/b0b750f08e5e18033668d4e22c06f985.webp"
  },
  {
    "image": "/images/8ea0f7dfe73fe008a5d75ff915687ddc.webp"
  },
  {
    "image": "/images/62df1fd2c01a083f5912c0cd72b8bf45.webp"
  },
  {
    "image": "/images/13d48f4c5b2d13463d1d153b8e574dde.webp"
  },
  {
    "image": "/images/d38aee275ec8f24b0d9f89be568eddca.webp"
  },
  {
    "image": "/images/831ca0f1df6723261ffb651c29008fda.webp"
  },
  {
    "image": "/images/45c53556be4552a341e514c6d8dffab4.webp"
  }
] as const;

const gridData8 = [
  {
    "image": "/images/a5cd6b4a784ab7b36e272a939b2690fd.webp"
  },
  {
    "image": "/images/3b38ea2f256b1b62dbdcba971275fdbd.webp"
  },
  {
    "image": "/images/c32fd09acf880ed3b8f968da3c4ff855.webp"
  },
  {
    "image": "/images/58ad57e37607a04da9420a4fc7517638.webp"
  },
  {
    "image": "/images/0be67c34de1d1eabacfa15ed2239c1ad.webp"
  },
  {
    "image": "/images/5057d6c095058ad78e725c523f3ab6c9.webp"
  },
  {
    "image": "/images/2f654a5ed6ac4cfb880998ce32732012.webp"
  },
  {
    "image": "/images/f4f6d422d03806fdd525faa1c7dbc8ba.webp"
  },
  {
    "image": "/images/352d1488d9e8cc95f9536108b5b16e49.webp"
  },
  {
    "image": "/images/0a5b9abe4dc66b14c38881e58e83a96c.webp"
  }
] as const;

const gridData9 = [
  {
    "image": "/images/386c02f0edf19fce3b396496680934d1.webp"
  },
  {
    "image": "/images/97956aceac8e12c181250a4db323c19f.webp"
  },
  {
    "image": "/images/594b35fe896a1c6233a02382ca05ea2e.webp"
  },
  {
    "image": "/images/78a5359c376774086da2fd7220d08b54.webp"
  }
] as const;

const gridData10 = [
  {
    "image": "/images/bb499b44524e6c41c7fe7929aa0fd7c4.webp"
  },
  {
    "image": "/images/03904e3447b64e46e50197e237d2624a.webp"
  },
  {
    "image": "/images/f6abf697703c0cb0b8c57e573b0159a8.webp"
  },
  {
    "image": "/images/0d495aa3b3b3c8d380ef14a4befcac0d.webp"
  },
  {
    "image": "/images/62dd42118b44a8006e2440b2440f4d01.webp"
  },
  {
    "image": "/images/192d40b6961774d56939baccced71db3.webp"
  },
  {
    "image": "/images/4524f25f663726f67736566b648ec3d2.webp"
  },
  {
    "image": "/images/dee8b7adbad7c4a4685edfbe58ac8dbd.webp"
  },
  {
    "image": "/images/42bfa2cbcc895457e4e4e21af1f0e87b.webp"
  },
  {
    "image": "/images/6b1cb8a5685f30d46e2a1d790abd2075.webp"
  }
] as const;

const gridData11 = [
  {
    "image": "/images/6c06d79eabdfa9d2c1720e318bfb835c.webp"
  },
  {
    "image": "/images/b2da0b05b014ed6f7904f7145e582c3f.webp"
  },
  {
    "image": "/images/42e7ef12d792729bab8bd9bf6972611d.webp"
  },
  {
    "image": "/images/e5d3ab4156ce617c8dada75619011cdd.webp"
  },
  {
    "image": "/images/e387625c60094227e2fb623dad90ce34.webp"
  },
  {
    "image": "/images/0b211b836963c9480d6f04dabcc4f7a3.webp"
  },
  {
    "image": "/images/a06858232e8b8b4f3de804d4c4c50875.webp"
  },
  {
    "image": "/images/eca894b70831c125d5bde00d2254d099.webp"
  },
  {
    "image": "/images/5285c00d4fdf71a25b91a7933c6f4d40.webp"
  },
  {
    "image": "/images/668707c077c5490c2e787f027adfc675.webp"
  }
] as const;


export default function OurFacilities(props: Record<string, string>) {
  const address_county = props.address_county ?? "Orange County";
  return (
    <Layout5>
      <div id="content" className="site-main post-2998 page type-page status-publish hentry">
        <div className="page-content">
          <div className="elementor elementor-2998">
            <div className="elementor-element elementor-element-55d9490 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-settings="&#123;&quot;background_background&quot;:&quot;gradient&quot;&#125;">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-d04e376 elementor-widget-mobile__width-auto elementor-absolute elementor-widget elementor-widget-image" data-settings="&#123;&quot;_position&quot;:&quot;absolute&quot;&#125;" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <link rel="preload" as="image" href="https://districtbehavioralhealth.com/wp-content/uploads/2026/03/2.svg" fetchPriority="high" /><img fetchPriority="high" src="https://districtbehavioralhealth.com/wp-content/uploads/2026/03/2.svg" alt="2" className="attachment-full size-full wp-image-103718" style={{maxWidth: "100%", height: "auto"}} />
                  </div>
                </div>
                <div className="elementor-element elementor-element-b30b95d e-flex e-con-boxed e-con e-child">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-a205aa8 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h1 className="elementor-heading-title elementor-size-default">Tour Our Facilities</h1>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-09771c5 elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">Every decision we make about our recovery facilities has our residents in mind. Taking the first steps to recovery is a challenging time. We cant to be a place that feels like home for our residents and provides them the sense of comfort and safety that they need to get through it.</div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-8526e63 elementor-absolute elementor-widget elementor-widget-image" data-settings="&#123;&quot;_position&quot;:&quot;absolute&quot;&#125;" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <img loading="lazy" src="https://districtbehavioralhealth.com/wp-content/uploads/2026/03/Gemini_Generated_Image_bxqa8zbxqa8zbxqa-2.svg" alt="Gemini Generated Image bxqa8zbxqa8zbxqa 2" className="attachment-full size-full wp-image-103717" style={{maxWidth: "100%", height: "auto"}} />
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-592f5e0 e-con-full e-flex e-con e-parent e-lazyloaded">
              <div className="elementor-element elementor-element-9e0276c elementor-widget elementor-widget-html" data-widget_type="html.default">
                <div className="elementor-widget-container">
                  <div className="carousel-wrap">
                    <div id="dualTrack" className="dual-track">
                      <div id="row1" className="slide-row">
                        <div id="belt1" className="slide-belt">
                          {gridData0.map((item, i) => (
                            <div key={i} className="slide-item">
                              <img loading="lazy" src={item.image} alt="Gallery image" style={{maxWidth: "100%", height: "auto"}} />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div id="row2" className="slide-row">
                        <div id="belt2" className="slide-belt">
                          {gridData1.map((item, i) => (
                            <div key={i} className="slide-item">
                              <img loading="lazy" src={item.image} alt="Gallery image" style={{maxWidth: "100%", height: "auto"}} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Script id="inline-script-0" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `const ROW_HEIGHT = parseInt(
  getComputedStyle(document.documentElement).getPropertyValue('--row-height')
) || 264;

const IMAGES = [
  { url: '/images/1df783f4a60896112313a25ec4301e2f.webp' },
  { url: '/images/cc46ae174eab28f0444dbd2748ae4b58.webp' },
  { url: '/images/9b550a5aaaa3353620c6713af1209cac.webp' },
  { url: '/images/fceafdc892e10f6d12d64dea059354bc.webp' },
  { url: '/images/b6282a5dd9f8a9fb34d871a387e6a954.webp' },
  { url: '/images/609b20a1faabcae4dbbcd2aa5537b09b.webp' },
  { url: '/images/f7c42240235b42772ef3afe5cd339633.webp' },
  { url: '/images/f2c30216b9a5c4bacf37ecca30093425.webp' },
  { url: '/images/dee690a225b8fbbf809aba8f3cf03c01.webp' },
  { url: '/images/73e621ba42bd56655756aabadf8d9497.webp' },
  { url: '/images/760a675ce5fb5cdf787e8be5cfa9a545.webp' },
  { url: '/images/d2214c40e1219a325479bc344c0eaeb0.webp' },
  { url: '/images/1d7e387141dd6bb4355035100570fe63.webp' },
  { url: '/images/ef236aaa9e63fbed0590a57b368f128e.webp' },
  { url: '/images/5654a59e93dd402ddf72d0c5cfd5771a.webp' },
  { url: '/images/93f7354d6523dc5149a4ea28f2cd832a.webp' },
  { url: '/images/111c395db30f4a99e6edce34bb11bb49.webp' },
  { url: '/images/0a24cc821369e8a8f73a2861a9e2a559.webp' },
  { url: '/images/3f56c27898acfd4cbd63a9acaf3907f3.webp' },
  { url: '/images/e3346b1e726c2fae527400265087f19c.webp' },
  { url: '/images/2c0fa2733032fe0d63ce7b81fbd1f72e.webp' },
  { url: '/images/f464f3463656907bb4b51a920412b40d.webp' },
  { url: '/images/9cf42f7b96f84041da87fe23435bbd6a.webp' },
  { url: '/images/d12de4930729129c35f12d161b94f2e0.webp' },
  { url: '/images/c395e36c0be13af667981d1575d06edc.webp' },
  { url: '/images/829f89b588ee20885d8a15d548f5551f.webp' },
  { url: '/images/2164fd0f1a8db53445368cd69350607c.webp' },
  { url: '/images/aeb07c7496e2b800c737b93748766be5.webp' },
  { url: '/images/ea4919050e98bc874486401dab44e03e.webp' },
  { url: '/images/f22a45278e5c1e0a627d04f528c12e0c.webp' },
  { url: '/images/9b75efc40c6ce217121014d05e4d8a8c.webp' },
  { url: '/images/da3c20e98f32e39b79715a80466a9968.webp' },
  { url: '/images/73b1ab2f5af27af587521270091bc75e.webp' },
  { url: '/images/85808f133d70c3ec8aad7e0e7be2f52e.webp' },
  { url: '/images/6e3cbaa5c4aa88a54eefd1c813fe3a40.webp' },
  { url: '/images/d2e26359373d0dabeeb78a0c53b4d3fa.webp' },
  { url: '/images/278e68d2f1ae783530d66597c6eb188e.webp' },
  { url: '/images/2f9d40341ff0c58c5e127e1667d47098.webp' },
  { url: '/images/51263335abf05d174f81a371be52396e.webp' },
  { url: '/images/401762e5126194f688e56be06aeb7bb2.webp' },
  { url: '/images/d48c398992558dad6a39b001e99ab110.webp' },
  { url: '/images/9717c740f8cee5cf07ae66473b011256.webp' },
  { url: '/images/6b7aa15a6c106b0e6d6d5b9688ab3ae9.webp' },
  { url: '/images/2a3b3f93e33ef1e87a5163eb51f0dd27.webp' },
  { url: '/images/620534a7a8f9883cbcc71a67b42dcb8e.webp' },
  { url: '/images/f6be710e3a2eaf0503a004f0f6b5e957.webp' },
  { url: '/images/2722d1cf738da550ccb849e8a81c424d.webp' },
  { url: '/images/62889778285ca683379e82c50cef3169.webp' },
  { url: '/images/3f56c27898acfd4cbd63a9acaf3907f3.webp' },
  { url: '/images/b91d2a41ca7f2a1ffe34b864076bee2d.webp' },
  { url: '/images/2eba8293438c077c48b133e558131250.webp' },
  { url: '/images/ac7bf1498cb2ae60430cc82ab1d51251.webp' },
  { url: '/images/ad6d9656f64edb8e9988b7acddf9c93a.webp' },
  { url: '/images/69ea530995bcff4f014fb23ac4678aaa.webp' },
  { url: '/images/722531f1d625b42b09773f1a8268ccef.webp' },
  { url: '/images/2eac20d739c8a775eef9ee048ef28033.webp' },
  { url: '/images/ce2b1c71133d90a5c70a3e20e4abc205.webp' },
  { url: '/images/1acd0cae621b4a0525a24e43dd9213bf.webp' },
  { url: '/images/8e597f63d90cd2e91bcb5cae523ea2f3.webp' },
  { url: '/images/61fa458cc9844352d78861142a5347a4.webp' },
  { url: '/images/d5a6ed2c8fd6e1afa138c130de1f9936.webp' },
  { url: '/images/13a341e95e9ddb140590ecb7f47f77ed.webp' },
  { url: '/images/e4b5fc3262a2b8e9101b7b4d7f35cc8d.webp' },
  { url: '/images/ca24610234f40b026017a33919c5a483.webp' },
  { url: '/images/41207a5ce6feffe2bd1f849fc5c572ae.webp' },
  { url: '/images/28ab210d5c1b5c813fdab27ef76913c1.webp' },
  { url: '/images/5975454b495f8e83f9333c3d5e7b0d79.webp' },
  { url: '/images/e4fc98fb96f98873d2ceaa9133270d3e.webp' },
  { url: '/images/70e01c08097e1d067ebefd1fdba04b8c.webp' },
  { url: '/images/5087439ec9828631afaf7d73c0b02319.webp' },
  { url: '/images/c6a73b926b0aa74403fa7b8886ea6eaa.webp' },
  { url: '/images/5d4ce3bdd7b4f75bc2553dac6b9a235b.webp' },
  { url: '/images/73a891a6638ebc0fd1e706dbb1f00257.webp' },
  { url: '/images/baf5ac794225ff982da355dfb022fcb8.webp' },
  { url: '/images/ce1c0daa6c15f83efb735b619adc9370.webp' }
];
const row1Images = IMAGES.filter((_, i) => i % 2 === 0);
const row2Images = IMAGES.filter((_, i) => i % 2 !== 0);

function buildBelt(beltEl, images) {
  for (let copy = 0; copy < 3; copy++) {
    images.forEach(img => {
      const item = document.createElement('div');
      item.className = 'slide-item';
      item.innerHTML = \`<img decoding="async"
        src="\${img.url}"
        height="\${ROW_HEIGHT}"
        loading="eager"
        draggable="false"
        alt="Gallery image"
        style="height:100%;width:auto;"
      >\`;
      beltEl.appendChild(item);
    });
  }
}

buildBelt(document.getElementById('belt1'), row1Images);
buildBelt(document.getElementById('belt2'), row2Images);

const GAP = parseFloat(
  getComputedStyle(document.documentElement).getPropertyValue('--slide-gap')
) || 0;

const belt1 = document.getElementById('belt1');
const belt2 = document.getElementById('belt2');

function getBeltCopyWidth(beltEl, itemCount) {
  const items = beltEl.querySelectorAll('.slide-item');
  if (!items.length) return 0;
  const first = items[0].getBoundingClientRect().left;
  const lastEl = items[itemCount - 1];
  const last = lastEl.getBoundingClientRect().left + lastEl.getBoundingClientRect().width;
  return last - first + GAP;
}

window.addEventListener('load', init);
setTimeout(init, 1200);

let initiated = false;
function init() {
  if (initiated) return;
  initiated = true;

  const copy1W = getBeltCopyWidth(belt1, row1Images.length);
  const copy2W = getBeltCopyWidth(belt2, row2Images.length);

  let offset = 0;
  let velocity = 0;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartOffset = 0;
  let autoplayEnabled = true;
  const SPEED = 0.6;
  const FRICTION = 0.92;

  function applyTransform() {
    const o1 = ((offset % copy1W) + copy1W) % copy1W;
    const o2 = ((offset % copy2W) + copy2W) % copy2W;
    belt1.style.transform = \`translateX(-\${o1}px)\`;
    belt2.style.transform = \`translateX(-\${o2}px)\`;
  }

  function loop() {
    if (!isDragging) {
      if (autoplayEnabled) velocity = SPEED;
      velocity *= FRICTION;
      if (autoplayEnabled && velocity < SPEED * 0.9) velocity = SPEED;
      offset += velocity;
    }
    applyTransform();
    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);

  const track = document.getElementById('dualTrack');

  function onDragStart(clientX) {
    isDragging = true;
    dragStartX = clientX;
    dragStartOffset = offset;
    velocity = 0;
    track.style.cursor = 'grabbing';
  }
  function onDragMove(clientX) {
    if (!isDragging) return;
    offset = dragStartOffset + (dragStartX - clientX);
    applyTransform();
  }
  function onDragEnd(clientX) {
    if (!isDragging) return;
    isDragging = false;
    track.style.cursor = '';
    velocity = Math.max(-8, Math.min(8, (dragStartX - clientX) * 0.05));
  }

  track.addEventListener('mousedown', e => onDragStart(e.clientX));
  window.addEventListener('mousemove', e => { if (isDragging) onDragMove(e.clientX); });
  window.addEventListener('mouseup', e => onDragEnd(e.clientX));
  track.addEventListener('touchstart', e => onDragStart(e.touches[0].clientX), { passive: true });
  track.addEventListener('touchmove', e => { onDragMove(e.touches[0].clientX); }, { passive: true });
  track.addEventListener('touchend', e => onDragEnd(e.changedTouches[0].clientX));
}` }} />
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-e67366c e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-65577e6 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      We Have Locations Across

The County
                      <br />
                    </h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-9a7217e elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      Florida

California

Tennessee
                      <br />
                      <br />
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-909a77a e-flex e-con-boxed e-con e-parent e-lazyloaded" data-settings="&#123;&quot;background_background&quot;:&quot;gradient&quot;&#125;">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-ec71fb2 elementor-widget__width-initial elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h1 className="elementor-heading-title elementor-size-default">See Our Facilities By State</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-e41b508 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-c5d86b1 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">California Locations</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-1005220 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-e7ac246 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-3b1b7b1 elementor-pagination-position-inside elementor-arrows-position-inside elementor-widget elementor-widget-image-carousel e-widget-swiper" data-settings="&#123;&quot;slides_to_show&quot;:&quot;1&quot;,&quot;navigation&quot;:&quot;both&quot;,&quot;infinite&quot;:&quot;yes&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500&#125;" data-widget_type="image-carousel.default">
                      <div className="elementor-widget-container">
                        <div dir="ltr" role="region" className="elementor-image-carousel-wrapper swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden" aria-label="Image Carousel" aria-roledescription="carousel">
                          <div id="swiper-wrapper-9eab4b90bc3515e8" className="elementor-image-carousel swiper-wrapper" aria-live="polite">
                            {gridData2.map((item, i) => (
                              <div key={i} role="group" className="swiper-slide swiper-slide-active" aria-label="1 / 8" aria-roledescription="slide">
                                <figure className="swiper-slide-inner">
                                  <img loading="lazy" src={item.image} alt="air-hockey-inside-outpatient-drug-rehab-facility-left-view-renaissance-recovery-1.webp" className="swiper-slide-image" style={{maxWidth: "100%", height: "auto"}} />
                                </figure>
                              </div>
                            ))}
                          </div>
                          <div role="button" className="elementor-swiper-button elementor-swiper-button-prev" tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-9eab4b90bc3515e8">
                            <svg className="e-font-icon-svg e-eicon-chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                              <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"></path>
                            </svg>
                          </div>
                          <div role="button" className="elementor-swiper-button elementor-swiper-button-next" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-9eab4b90bc3515e8">
                            <svg className="e-font-icon-svg e-eicon-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                              <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"></path>
                            </svg>
                          </div>
                          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                            <span role="button" className="swiper-pagination-bullet swiper-pagination-bullet-active" aria-label="Go to slide 1" aria-current="true"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 2"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 3"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 4"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 5"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 6"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 7"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 8"></span>
                          </div>
                          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-f66c50c elementor-align-justify elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-hidden-desktop elementor-widget elementor-widget-button" data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <Link href="" role="button" className="elementor-button elementor-size-sm">
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">Treatment Center</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-df28e3d e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-a203878 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-cebbe1e elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg className="e-font-icon-svg e-fas-map-marker-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true">
                                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                  </svg>
                                </span>
                                <span className="elementor-icon-list-text">10175 Slater Ave Ste 200, Fountain Valley, CA 92708</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-18a387d elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">
                              {address_county}, CA

Renaissance Recovery
                              <b>Drug Rehab Center</b>
                              <br />
                              <br />
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-c64530e e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-b52495f elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link href="tel:714-509-5856" className="elementor-button elementor-button-link elementor-size-sm">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">714-509-5854</span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-fb44849 elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link href="/facility/drug-rehab-center-orange-county-ca-renaissance-recovery/" className="elementor-button elementor-button-link elementor-size-sm">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">Take a Tour</span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-de4f18b elementor-align-justify elementor-widget__width-initial elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-button" data-settings="&#123;&quot;_position&quot;:&quot;absolute&quot;&#125;" data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <Link href="" role="button" className="elementor-button elementor-size-sm">
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">Treatment Center</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-ea74760 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-6d25a4b elementor-pagination-position-inside elementor-arrows-position-inside elementor-widget elementor-widget-image-carousel e-widget-swiper" data-settings="&#123;&quot;slides_to_show&quot;:&quot;1&quot;,&quot;navigation&quot;:&quot;both&quot;,&quot;infinite&quot;:&quot;yes&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500&#125;" data-widget_type="image-carousel.default">
                      <div className="elementor-widget-container">
                        <div dir="ltr" role="region" className="elementor-image-carousel-wrapper swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden" aria-label="Image Carousel" aria-roledescription="carousel">
                          <div id="swiper-wrapper-9e976da1dc47db10a" className="elementor-image-carousel swiper-wrapper" aria-live="polite">
                            {gridData3.map((item, i) => (
                              <div key={i} role="group" className="swiper-slide swiper-slide-active" aria-label="1 / 8" aria-roledescription="slide">
                                <figure className="swiper-slide-inner">
                                  <img loading="lazy" src={item.image} alt="023_TPP_LangstonGroup_5772VenturiDr-1.webp" className="swiper-slide-image" style={{maxWidth: "100%", height: "auto"}} />
                                </figure>
                              </div>
                            ))}
                          </div>
                          <div role="button" className="elementor-swiper-button elementor-swiper-button-prev" tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-9e976da1dc47db10a">
                            <svg className="e-font-icon-svg e-eicon-chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                              <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"></path>
                            </svg>
                          </div>
                          <div role="button" className="elementor-swiper-button elementor-swiper-button-next" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-9e976da1dc47db10a">
                            <svg className="e-font-icon-svg e-eicon-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                              <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"></path>
                            </svg>
                          </div>
                          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                            <span role="button" className="swiper-pagination-bullet swiper-pagination-bullet-active" aria-label="Go to slide 1" aria-current="true"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 2"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 3"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 4"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 5"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 6"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 7"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 8"></span>
                          </div>
                          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-d2bc3fa elementor-align-justify elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-hidden-desktop elementor-widget elementor-widget-button" data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <Link href="" role="button" className="elementor-button elementor-size-sm">
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">Sober Living Houses</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-ff8c0dd e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-2928500 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-5dbbc3d elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg className="e-font-icon-svg e-fas-map-marker-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true">
                                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                  </svg>
                                </span>
                                <span className="elementor-icon-list-text">{address_county}, CA (West)</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-6ebb6e7 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">
                              {address_county}, CA (West)

District Recovery Community
                              <b>Sober Living</b>
                              <br />
                              <br />
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-ec29d5b e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-3984cf7 elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial ctm-no-swap elementor-widget elementor-widget-button" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link href="tel:888-871-2088" className="elementor-button elementor-button-link elementor-size-sm">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">888-871-2088</span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-38f1911 elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link href="/facility/district-recovery-community-orange-county-west/" className="elementor-button elementor-button-link elementor-size-sm">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">Take a Tour</span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-eba3152 elementor-align-justify elementor-widget__width-initial elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-button" data-settings="&#123;&quot;_position&quot;:&quot;absolute&quot;&#125;" data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <Link href="" role="button" className="elementor-button elementor-size-sm">
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">Sober Living Houses</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-691acd9 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-f644870 elementor-pagination-position-inside elementor-arrows-position-inside elementor-widget elementor-widget-image-carousel e-widget-swiper" data-settings="&#123;&quot;slides_to_show&quot;:&quot;1&quot;,&quot;navigation&quot;:&quot;both&quot;,&quot;infinite&quot;:&quot;yes&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500&#125;" data-widget_type="image-carousel.default">
                      <div className="elementor-widget-container">
                        <div dir="ltr" role="region" className="elementor-image-carousel-wrapper swiper swiper-initialized swiper-horizontal swiper-pointer-events" aria-label="Image Carousel" aria-roledescription="carousel">
                          <div id="swiper-wrapper-10ed8dfb226759c610" className="elementor-image-carousel swiper-wrapper" aria-live="polite">
                            {gridData4.map((item, i) => (
                              <div key={i} role="group" className="swiper-slide swiper-slide-active" aria-label="1 / 11" aria-roledescription="slide">
                                <figure className="swiper-slide-inner">
                                  <img loading="lazy" src={item.image} alt="DSC_8487.webp" className="swiper-slide-image" style={{maxWidth: "100%", height: "auto"}} />
                                </figure>
                              </div>
                            ))}
                          </div>
                          <div role="button" className="elementor-swiper-button elementor-swiper-button-prev" tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-10ed8dfb226759c610">
                            <svg className="e-font-icon-svg e-eicon-chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                              <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"></path>
                            </svg>
                          </div>
                          <div role="button" className="elementor-swiper-button elementor-swiper-button-next" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-10ed8dfb226759c610">
                            <svg className="e-font-icon-svg e-eicon-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                              <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"></path>
                            </svg>
                          </div>
                          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                            <span role="button" className="swiper-pagination-bullet swiper-pagination-bullet-active" aria-label="Go to slide 1" aria-current="true"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 2"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 3"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 4"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 5"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 6"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 7"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 8"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 9"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 10"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 11"></span>
                          </div>
                          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-2b1778b elementor-align-justify elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-hidden-desktop elementor-widget elementor-widget-button" data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <Link href="" role="button" className="elementor-button elementor-size-sm">
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">Sober Living Houses</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-9e5aac5 e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-d70e4ab e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-5395cfa elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg className="e-font-icon-svg e-fas-map-marker-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true">
                                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                  </svg>
                                </span>
                                <span className="elementor-icon-list-text">Southern California</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-35bee37 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">
                              Southern California

District Recovery Community
                              <b>Sober Living</b>
                              <br />
                              <br />
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-d169381 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-60dc7e4 elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial ctm-no-swap elementor-widget elementor-widget-button" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link href="tel:888-871-2088" className="elementor-button elementor-button-link elementor-size-sm">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">888-871-2088</span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-22491e2 elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link href="/facility/district-recovery-community-southern-california/" className="elementor-button elementor-button-link elementor-size-sm">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">Take a Tour</span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-bfa6dc0 elementor-align-justify elementor-widget__width-initial elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-button" data-settings="&#123;&quot;_position&quot;:&quot;absolute&quot;&#125;" data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <Link href="" role="button" className="elementor-button elementor-size-sm">
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">Sober Living Houses</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-16f8d70 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-94b65f8 elementor-pagination-position-inside elementor-arrows-position-inside elementor-widget elementor-widget-image-carousel e-widget-swiper" data-settings="&#123;&quot;slides_to_show&quot;:&quot;1&quot;,&quot;navigation&quot;:&quot;both&quot;,&quot;infinite&quot;:&quot;yes&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500&#125;" data-widget_type="image-carousel.default">
                      <div className="elementor-widget-container">
                        <div dir="ltr" role="region" className="elementor-image-carousel-wrapper swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden" aria-label="Image Carousel" aria-roledescription="carousel">
                          <div id="swiper-wrapper-108dbd8e194f22956" className="elementor-image-carousel swiper-wrapper" aria-live="polite">
                            {gridData5.map((item, i) => (
                              <div key={i} role="group" className="swiper-slide swiper-slide-active" aria-label="1 / 6" aria-roledescription="slide">
                                <figure className="swiper-slide-inner">
                                  <img loading="lazy" src={item.image} alt="IMG_2319-1.webp" className="swiper-slide-image" style={{maxWidth: "100%", height: "auto"}} />
                                </figure>
                              </div>
                            ))}
                          </div>
                          <div role="button" className="elementor-swiper-button elementor-swiper-button-prev" tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-108dbd8e194f22956">
                            <svg className="e-font-icon-svg e-eicon-chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                              <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"></path>
                            </svg>
                          </div>
                          <div role="button" className="elementor-swiper-button elementor-swiper-button-next" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-108dbd8e194f22956">
                            <svg className="e-font-icon-svg e-eicon-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                              <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"></path>
                            </svg>
                          </div>
                          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                            <span role="button" className="swiper-pagination-bullet swiper-pagination-bullet-active" aria-label="Go to slide 1" aria-current="true"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 2"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 3"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 4"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 5"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 6"></span>
                          </div>
                          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-c669a19 elementor-align-justify elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-hidden-desktop elementor-widget elementor-widget-button" data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <Link href="" role="button" className="elementor-button elementor-size-sm">
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">Sober Living Houses</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-b3bd330 e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-7ca0791 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-b9f99c1 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg className="e-font-icon-svg e-fas-map-marker-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true">
                                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                  </svg>
                                </span>
                                <span className="elementor-icon-list-text">{address_county}, CA</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-61fb3d3 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">
                              {address_county}, CA

District Recovery Community
                              <b>Sober Living</b>
                              <br />
                              <br />
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-f5bdbe2 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-96b955d elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial ctm-no-swap elementor-widget elementor-widget-button" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link href="tel:888-871-2088" className="elementor-button elementor-button-link elementor-size-sm">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">888-871-2088</span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-2e89fed elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link href="/facility/district-recovery-community-orange-county/" className="elementor-button elementor-button-link elementor-size-sm">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">Take a Tour</span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-08be2ce elementor-align-justify elementor-widget__width-initial elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-button" data-settings="&#123;&quot;_position&quot;:&quot;absolute&quot;&#125;" data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <Link href="" role="button" className="elementor-button elementor-size-sm">
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">Sober Living Houses</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-84ac3ca e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-39464c8 elementor-pagination-position-inside elementor-arrows-position-inside elementor-widget elementor-widget-image-carousel e-widget-swiper" data-settings="&#123;&quot;slides_to_show&quot;:&quot;1&quot;,&quot;navigation&quot;:&quot;both&quot;,&quot;infinite&quot;:&quot;yes&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500&#125;" data-widget_type="image-carousel.default">
                      <div className="elementor-widget-container">
                        <div dir="ltr" role="region" className="elementor-image-carousel-wrapper swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden" aria-label="Image Carousel" aria-roledescription="carousel">
                          <div id="swiper-wrapper-5462cb4c2d724224" className="elementor-image-carousel swiper-wrapper" aria-live="polite">
                            {gridData6.map((item, i) => (
                              <div key={i} role="group" className="swiper-slide swiper-slide-active" aria-label="1 / 4" aria-roledescription="slide">
                                <figure className="swiper-slide-inner">
                                  <img loading="lazy" src={item.image} alt="genMid.IG20036699_5_0-1.webp" className="swiper-slide-image" style={{maxWidth: "100%", height: "auto"}} />
                                </figure>
                              </div>
                            ))}
                          </div>
                          <div role="button" className="elementor-swiper-button elementor-swiper-button-prev" tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-5462cb4c2d724224">
                            <svg className="e-font-icon-svg e-eicon-chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                              <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"></path>
                            </svg>
                          </div>
                          <div role="button" className="elementor-swiper-button elementor-swiper-button-next" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-5462cb4c2d724224">
                            <svg className="e-font-icon-svg e-eicon-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                              <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"></path>
                            </svg>
                          </div>
                          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                            <span role="button" className="swiper-pagination-bullet swiper-pagination-bullet-active" aria-label="Go to slide 1" aria-current="true"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 2"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 3"></span>
                            <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 4"></span>
                          </div>
                          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-c0fda7d elementor-align-justify elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-hidden-desktop elementor-widget elementor-widget-button" data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <Link href="" role="button" className="elementor-button elementor-size-sm">
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">Sober Living Houses</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-d3521a9 e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-5baf54d e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-4cf3b9e elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg className="e-font-icon-svg e-fas-map-marker-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true">
                                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                  </svg>
                                </span>
                                <span className="elementor-icon-list-text">{address_county}, CA (Central)</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-2ccd1c7 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">
                              {address_county}, CA (Central)

District Recovery Community
                              <b>Sober Living</b>
                              <br />
                              <br />
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-69bc829 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-50d417c elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial ctm-no-swap elementor-widget elementor-widget-button" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link href="tel:888-871-2088" className="elementor-button elementor-button-link elementor-size-sm">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">888-871-2088</span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-acb9a58 elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link href="/facility/district-recovery-community-orange-county-central/" className="elementor-button elementor-button-link elementor-size-sm">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">Take a Tour</span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-f218814 elementor-align-justify elementor-widget__width-initial elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-button" data-settings="&#123;&quot;_position&quot;:&quot;absolute&quot;&#125;" data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <Link href="" role="button" className="elementor-button elementor-size-sm">
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">Sober Living Houses</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-493a542 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-5b3badf elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <img loading="lazy" src="/images/2f131a3d55d7ad2927cf9e1a317a7016.webp" alt="AR Hollywood3" className="attachment-full size-full wp-image-108320" style={{maxWidth: "100%", height: "auto"}} />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-7683d5b e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-e11e5ea e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-0f40453 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg className="e-font-icon-svg e-fas-map-marker-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true">
                                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                  </svg>
                                </span>
                                <span className="elementor-icon-list-text">1800 Vine St, Los Angeles, CA 90028</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-86e57f0 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">
                              Los Angeles, CA

Alliance Recovery
                              <b>Drug Rehab Center</b>
                              <br />
                              <br />
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-b055e17 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-8e98a93 elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link href="tel:213-682-3757" className="elementor-button elementor-button-link elementor-size-sm">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">213-682-3757</span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-a1d2ad8 elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <a href="https://alliancerecovery.com/facility/alliance-recovery-drug-alcohol-rehab-los-angeles-addiction-treatment-center/" rel="nofollow noopener" className="elementor-button elementor-button-link elementor-size-sm" target="_blank">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">Take a Tour</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-84560b1 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-3b80f93 elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <img loading="lazy" src="/images/9066b19ad0a8d80ff6e3bc5a7398a8de.webp" alt="DSC4849 scaled 1" className="attachment-full size-full wp-image-108321" style={{maxWidth: "100%", height: "auto"}} />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-7d49bf7 e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-92582d6 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-49e11b8 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg className="e-font-icon-svg e-fas-map-marker-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true">
                                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                  </svg>
                                </span>
                                <span className="elementor-icon-list-text">17841 Lincoln St, Villa Park, CA 92861</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-ce45083 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">
                              {address_county}, CA

Connections OC
                              <b>Mental Health Treatment Center</b>
                              <br />
                              <br />
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-79299de e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-e1956b7 elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link href="tel:657-317-7880" className="elementor-button elementor-button-link elementor-size-sm">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">657-317-7880</span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-2785327 elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <a href="https://connectionsoc.com/facility/connections-mental-health-treatment-center-orange-county-ca/" rel="nofollow noopener" className="elementor-button elementor-button-link elementor-size-sm" target="_blank">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">Take a Tour</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-dcba492 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-fe5dd77 elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <img loading="lazy" src="/images/073305fcbd894eb90999a57efe3e1e61.webp" alt="GetMedia 32" className="attachment-full size-full wp-image-108322" style={{maxWidth: "100%", height: "auto"}} />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-a040c70 e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-059c38b e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-ef0848c elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg className="e-font-icon-svg e-fas-map-marker-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true">
                                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                  </svg>
                                </span>
                                <span className="elementor-icon-list-text">17811 Bigelow Park, Tustin, CA 92780</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-ab82226 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">
                              Tustin, CA

Connections OC
                              <b>Mental Health Treatment Center</b>
                              <br />
                              <br />
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-7541b94 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-3ee2a6f elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link href="tel:657-315-1723" className="elementor-button elementor-button-link elementor-size-sm">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">657-315-1723</span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-31dc552 elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <a href="https://connectionsoc.com/facility/connections-oc-mental-health-treatment-center-tustin-ca/" rel="nofollow noopener" className="elementor-button elementor-button-link elementor-size-sm" target="_blank">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">Take a Tour</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-6da18f3 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-cb61d91 elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <img loading="lazy" src="/images/2f43479901b1d212345cb20423f244ef.webp" alt="detox laguna beach residential treatment ocean view from patio 10" className="attachment-full size-full wp-image-108323" style={{maxWidth: "100%", height: "auto"}} />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-3dce983 e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-30703d8 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-c1f7672 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg className="e-font-icon-svg e-fas-map-marker-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true">
                                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                  </svg>
                                </span>
                                <span className="elementor-icon-list-text">31365 Monterey St, Laguna Beach, CA 92651</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-be29685 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">
                              Laguna Beach, CA (Beachside)

California Detox
                              <b>Drug Rehab Center</b>
                              <br />
                              <br />
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-791cb6f e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-d9c4203 elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link href="tel:949-390-5377" className="elementor-button elementor-button-link elementor-size-sm">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">949-390-5377</span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-197bc1f elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <a href="http://californiadetox.com/gallery/" rel="nofollow noopener" className="elementor-button elementor-button-link elementor-size-sm" target="_blank">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">Take a Tour</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-b918b17 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-6e54319 elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <img loading="lazy" src="/images/99f03baa8c47ce95085026cdf56a39e6.webp" alt="200817 GratitudeLodge Kline 010" className="attachment-full size-full wp-image-108324" style={{maxWidth: "100%", height: "auto"}} />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-87d1c09 e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-7753474 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-e834d7f elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg className="e-font-icon-svg e-fas-map-marker-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true">
                                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                  </svg>
                                </span>
                                <span className="elementor-icon-list-text">1661 Orchard Dr, Newport Beach, CA 92660</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-c790333 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">
                              {address_county}, CA

Gratitude Lodge
                              <b>Drug Rehab Center</b>
                              <br />
                              <br />
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-966d177 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-df0d0c6 elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link href="tel:949-694-7240" className="elementor-button elementor-button-link elementor-size-sm">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">949-694-7240</span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-1ba3dfd elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <a href="http://gratitudelodge.com/facility/gratitude-lodge-orange-county-drug-alcohol-substance-abuse-addiction-center/" rel="nofollow noopener" className="elementor-button elementor-button-link elementor-size-sm" target="_blank">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">Take a Tour</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-20ec6cc e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-6f1b412 elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <img loading="lazy" src="/images/819b6fc3c7ae3e23333b38d618301843.webp" alt="230531 GratitudeLodge 024" className="attachment-full size-full wp-image-108325" style={{maxWidth: "100%", height: "auto"}} />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-2cf4264 e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-ceba914 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-c7f6ac7 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg className="e-font-icon-svg e-fas-map-marker-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true">
                                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                  </svg>
                                </span>
                                <span className="elementor-icon-list-text">20132 Redlands Dr, Newport Beach, CA 92660</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-543b694 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">
                              Newport Beach, CA

Gratitude Lodge
                              <b>Drug Rehab Center</b>
                              <br />
                              <br />
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-b706705 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-546cadd elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link href="tel:949-782-7724" className="elementor-button elementor-button-link elementor-size-sm">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">949-694-7240</span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-43304f2 elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <a href="http://gratitudelodge.com/facility/gratitude-lodge-drug-alcohol-substance-abuse-addiction-center-newport-beach-ca/" rel="nofollow noopener" className="elementor-button elementor-button-link elementor-size-sm" target="_blank">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">Take a Tour</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-63e3e12 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-c8de02a elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <img loading="lazy" src="/images/8d2e64f0da76139e33e23c3a542bc43e.webp" alt="24 03 26 GratitudeLodge 021" className="attachment-full size-full wp-image-108326" style={{maxWidth: "100%", height: "auto"}} />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-4ed7f7c e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-654dc7b e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-f0ccfbc elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg className="e-font-icon-svg e-fas-map-marker-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true">
                                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                  </svg>
                                </span>
                                <span className="elementor-icon-list-text">3010 E 1st St, Long Beach, CA 90803</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-bd95896 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">
                              Los Angeles, CA

Gratitude Lodge
                              <b>Drug Rehab Center</b>
                              <br />
                              <br />
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-d740c7e e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-2bbc93f elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link href="tel:562-573-1911" className="elementor-button elementor-button-link elementor-size-sm">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">562-573-1911</span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-9e075db elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <a href="http://gratitudelodge.com/facility/gratitude-lodge-drug-alcohol-rehab-center-los-angeles/" rel="nofollow noopener" className="elementor-button elementor-button-link elementor-size-sm" target="_blank">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">Take a Tour</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-634740a e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                    <div className="elementor-element elementor-element-e6831a4 elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <img loading="lazy" src="/images/38f41d988b82bf107819782b31970f91.webp" alt="24 03 26 GratitudeLodge 001" className="attachment-full size-full wp-image-108327" style={{maxWidth: "100%", height: "auto"}} />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-abbcf8b e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-1f6e26a e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-c2decce elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg className="e-font-icon-svg e-fas-map-marker-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true">
                                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                  </svg>
                                </span>
                                <span className="elementor-icon-list-text">3849 Chatwin Ave, Long Beach, CA 90808</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-7c9c6c4 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">
                              Long Beach, CA

Gratitude Lodge
                              <b>Drug Rehab Center</b>
                              <br />
                              <br />
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-7e95828 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-abd122b elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link href="tel:562-516-1199" className="elementor-button elementor-button-link elementor-size-sm">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">562-516-1199</span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-b4a6b72 elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <a href="http://gratitudelodge.com/facility/gratitude-lodge-drug-alcohol-addiction-rehab-center-long-beach-ca/" rel="nofollow noopener" className="elementor-button elementor-button-link elementor-size-sm" target="_blank">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">Take a Tour</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-3331927 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-47a5514 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Florida Locations</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-739cb24 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-60d851a e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-1d2cfe1 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                      <div className="elementor-element elementor-element-cb9d9fa elementor-pagination-position-inside elementor-arrows-position-inside elementor-widget elementor-widget-image-carousel e-widget-swiper" data-settings="&#123;&quot;slides_to_show&quot;:&quot;1&quot;,&quot;navigation&quot;:&quot;both&quot;,&quot;infinite&quot;:&quot;yes&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500&#125;" data-widget_type="image-carousel.default">
                        <div className="elementor-widget-container">
                          <div dir="ltr" role="region" className="elementor-image-carousel-wrapper swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden" aria-label="Image Carousel" aria-roledescription="carousel">
                            <div id="swiper-wrapper-d4115afe27bad9ad" className="elementor-image-carousel swiper-wrapper" aria-live="polite">
                              {gridData7.map((item, i) => (
                                <div key={i} role="group" className="swiper-slide swiper-slide-active" aria-label="1 / 7" aria-roledescription="slide">
                                  <figure className="swiper-slide-inner">
                                    <img loading="lazy" src={item.image} alt="DSC00405.jpg-SMALL.webp" className="swiper-slide-image" style={{maxWidth: "100%", height: "auto"}} />
                                  </figure>
                                </div>
                              ))}
                            </div>
                            <div role="button" className="elementor-swiper-button elementor-swiper-button-prev" tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-d4115afe27bad9ad">
                              <svg className="e-font-icon-svg e-eicon-chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                                <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"></path>
                              </svg>
                            </div>
                            <div role="button" className="elementor-swiper-button elementor-swiper-button-next" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-d4115afe27bad9ad">
                              <svg className="e-font-icon-svg e-eicon-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                                <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"></path>
                              </svg>
                            </div>
                            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                              <span role="button" className="swiper-pagination-bullet swiper-pagination-bullet-active" aria-label="Go to slide 1" aria-current="true"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 2"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 3"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 4"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 5"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 6"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 7"></span>
                            </div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-13ab984 elementor-align-justify elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-hidden-desktop elementor-widget elementor-widget-button" data-widget_type="button.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <Link href="" role="button" className="elementor-button elementor-size-sm">
                              <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-text">Treatment Center</span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-ae3bd0c e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-1ef5390 e-con-full e-flex e-con e-child">
                          <div className="elementor-element elementor-element-3b35f1d elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items">
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg className="e-font-icon-svg e-fas-map-marker-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true">
                                      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                    </svg>
                                  </span>
                                  <span className="elementor-icon-list-text">327 W Lantana Rd, Lantana, FL 33462</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-15e6cbe elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">
                                Palm Beach, FL

Renaissance Recovery
                                <b>Drug Rehab Center</b>
                                <br />
                                <br />
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-c9535d8 e-con-full e-flex e-con e-child">
                          <div className="elementor-element elementor-element-a50d8dd elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-button-wrapper">
                                <Link href="tel:5614851664" className="elementor-button elementor-button-link elementor-size-sm">
                                  <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">561-485-1664</span>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-860b671 elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-button-wrapper">
                                <Link href="/facility/drug-rehab-center-palm-beach-fl-renaissance-recovery/" className="elementor-button elementor-button-link elementor-size-sm">
                                  <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">Take a Tour</span>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-c2bf2e4 elementor-align-justify elementor-widget__width-initial elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-button" data-settings="&#123;&quot;_position&quot;:&quot;absolute&quot;&#125;" data-widget_type="button.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <Link href="" role="button" className="elementor-button elementor-size-sm">
                              <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-text">Treatment Center</span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-795862b e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                      <div className="elementor-element elementor-element-0ea58fa elementor-pagination-position-inside elementor-arrows-position-inside elementor-widget elementor-widget-image-carousel e-widget-swiper" data-settings="&#123;&quot;slides_to_show&quot;:&quot;1&quot;,&quot;navigation&quot;:&quot;both&quot;,&quot;infinite&quot;:&quot;yes&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500&#125;" data-widget_type="image-carousel.default">
                        <div className="elementor-widget-container">
                          <div dir="ltr" role="region" className="elementor-image-carousel-wrapper swiper swiper-initialized swiper-horizontal swiper-pointer-events" aria-label="Image Carousel" aria-roledescription="carousel">
                            <div id="swiper-wrapper-a10650f1b7016f32" className="elementor-image-carousel swiper-wrapper" aria-live="polite">
                              {gridData8.map((item, i) => (
                                <div key={i} role="group" className="swiper-slide swiper-slide-active" aria-label="1 / 10" aria-roledescription="slide">
                                  <figure className="swiper-slide-inner">
                                    <img loading="lazy" src={item.image} alt="backyard-hammock-outside-sober-living-environment-renaissance-recovery-florida.webp" className="swiper-slide-image" style={{maxWidth: "100%", height: "auto"}} />
                                  </figure>
                                </div>
                              ))}
                            </div>
                            <div role="button" className="elementor-swiper-button elementor-swiper-button-prev" tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-a10650f1b7016f32">
                              <svg className="e-font-icon-svg e-eicon-chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                                <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"></path>
                              </svg>
                            </div>
                            <div role="button" className="elementor-swiper-button elementor-swiper-button-next" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-a10650f1b7016f32">
                              <svg className="e-font-icon-svg e-eicon-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                                <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"></path>
                              </svg>
                            </div>
                            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                              <span role="button" className="swiper-pagination-bullet swiper-pagination-bullet-active" aria-label="Go to slide 1" aria-current="true"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 2"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 3"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 4"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 5"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 6"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 7"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 8"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 9"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 10"></span>
                            </div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-f1b6ab3 elementor-align-justify elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-hidden-desktop elementor-widget elementor-widget-button" data-widget_type="button.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <Link href="" role="button" className="elementor-button elementor-size-sm">
                              <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-text">Sober Living Houses</span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-fdefac1 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-470e659 e-con-full e-flex e-con e-child">
                          <div className="elementor-element elementor-element-0a19878 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items">
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg className="e-font-icon-svg e-fas-map-marker-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true">
                                      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                    </svg>
                                  </span>
                                  <span className="elementor-icon-list-text">Southern Florida</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-62b922c elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">
                                South Florida

Renaissance Recovery
                                <b>Sober Living</b>
                                <br />
                                <br />
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-a3cb927 e-con-full e-flex e-con e-child">
                          <div className="elementor-element elementor-element-8d14a96 elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial ctm-no-swap elementor-widget elementor-widget-button" data-widget_type="button.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-button-wrapper">
                                <Link href="tel:561-823-3230" className="elementor-button elementor-button-link elementor-size-sm">
                                  <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">561-823-3230</span>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-9b0e46a elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-button-wrapper">
                                <Link href="/facility/sober-living-houses-south-florida-renaissance-recovery/" className="elementor-button elementor-button-link elementor-size-sm">
                                  <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">Take a Tour</span>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-6601092 elementor-align-justify elementor-widget__width-initial elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-button" data-settings="&#123;&quot;_position&quot;:&quot;absolute&quot;&#125;" data-widget_type="button.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <Link href="" role="button" className="elementor-button elementor-size-sm">
                              <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-text">Sober Living Houses</span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-ec53863 e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-4b96307 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                      <div className="elementor-element elementor-element-5da8c40 elementor-pagination-position-inside elementor-arrows-position-inside elementor-widget elementor-widget-image-carousel e-widget-swiper" data-settings="&#123;&quot;slides_to_show&quot;:&quot;1&quot;,&quot;navigation&quot;:&quot;both&quot;,&quot;infinite&quot;:&quot;yes&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500&#125;" data-widget_type="image-carousel.default">
                        <div className="elementor-widget-container">
                          <div dir="ltr" role="region" className="elementor-image-carousel-wrapper swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden" aria-label="Image Carousel" aria-roledescription="carousel">
                            <div id="swiper-wrapper-a4527acf09a763a4" className="elementor-image-carousel swiper-wrapper" aria-live="polite">
                              {gridData9.map((item, i) => (
                                <div key={i} role="group" className="swiper-slide swiper-slide-active" aria-label="1 / 4" aria-roledescription="slide">
                                  <figure className="swiper-slide-inner">
                                    <img loading="lazy" src={item.image} alt="DSC00310.jpg-SMALL.webp" className="swiper-slide-image" style={{maxWidth: "100%", height: "auto"}} />
                                  </figure>
                                </div>
                              ))}
                            </div>
                            <div role="button" className="elementor-swiper-button elementor-swiper-button-prev" tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-a4527acf09a763a4">
                              <svg className="e-font-icon-svg e-eicon-chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                                <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"></path>
                              </svg>
                            </div>
                            <div role="button" className="elementor-swiper-button elementor-swiper-button-next" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-a4527acf09a763a4">
                              <svg className="e-font-icon-svg e-eicon-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                                <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"></path>
                              </svg>
                            </div>
                            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                              <span role="button" className="swiper-pagination-bullet swiper-pagination-bullet-active" aria-label="Go to slide 1" aria-current="true"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 2"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 3"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 4"></span>
                            </div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-5f7bc4d elementor-align-justify elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-hidden-desktop elementor-widget elementor-widget-button" data-widget_type="button.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <Link href="" role="button" className="elementor-button elementor-size-sm">
                              <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-text">Sober Living Houses</span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-b4f1d09 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-a17f589 e-con-full e-flex e-con e-child">
                          <div className="elementor-element elementor-element-9bf3ae9 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items">
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg className="e-font-icon-svg e-fas-map-marker-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true">
                                      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                    </svg>
                                  </span>
                                  <span className="elementor-icon-list-text">Palm Beach County, FL</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-7d9f18f elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">
                                Palm Beach County

Renaissance Recovery
                                <b>Sober Living</b>
                                <br />
                                <br />
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-a2b3b27 e-con-full e-flex e-con e-child">
                          <div className="elementor-element elementor-element-cd38b7a elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial ctm-no-swap elementor-widget elementor-widget-button" data-widget_type="button.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-button-wrapper">
                                <Link href="tel:561-823-3230" className="elementor-button elementor-button-link elementor-size-sm">
                                  <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">561-823-3230</span>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-ac3a50f elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-button-wrapper">
                                <Link href="/facility/sober-living-houses-palm-beach-county-renaissance-recovery/" className="elementor-button elementor-button-link elementor-size-sm">
                                  <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">Take a Tour</span>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-9b4a6b7 elementor-align-justify elementor-widget__width-initial elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-button" data-settings="&#123;&quot;_position&quot;:&quot;absolute&quot;&#125;" data-widget_type="button.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <Link href="" role="button" className="elementor-button elementor-size-sm">
                              <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-text">Sober Living Houses</span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-d979787 e-flex e-con-boxed e-con e-parent e-lazyloaded">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-7575bea elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Tennessee Locations</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-16bd39f e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-9001c66 e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-7dacf5f e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                      <div className="elementor-element elementor-element-eb7ab5f elementor-pagination-position-inside elementor-arrows-position-inside elementor-widget elementor-widget-image-carousel e-widget-swiper" data-settings="&#123;&quot;slides_to_show&quot;:&quot;1&quot;,&quot;navigation&quot;:&quot;both&quot;,&quot;infinite&quot;:&quot;yes&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500&#125;" data-widget_type="image-carousel.default">
                        <div className="elementor-widget-container">
                          <div dir="ltr" role="region" className="elementor-image-carousel-wrapper swiper swiper-initialized swiper-horizontal swiper-pointer-events" aria-label="Image Carousel" aria-roledescription="carousel">
                            <div id="swiper-wrapper-cf8fe5e33ec51ad2" className="elementor-image-carousel swiper-wrapper" aria-live="polite">
                              {gridData10.map((item, i) => (
                                <div key={i} role="group" className="swiper-slide swiper-slide-active" aria-label="1 / 10" aria-roledescription="slide">
                                  <figure className="swiper-slide-inner">
                                    <img loading="lazy" src={item.image} alt="RR_Tenn2.webp" className="swiper-slide-image" style={{maxWidth: "100%", height: "auto"}} />
                                  </figure>
                                </div>
                              ))}
                            </div>
                            <div role="button" className="elementor-swiper-button elementor-swiper-button-prev" tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-cf8fe5e33ec51ad2">
                              <svg className="e-font-icon-svg e-eicon-chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                                <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"></path>
                              </svg>
                            </div>
                            <div role="button" className="elementor-swiper-button elementor-swiper-button-next" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-cf8fe5e33ec51ad2">
                              <svg className="e-font-icon-svg e-eicon-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                                <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"></path>
                              </svg>
                            </div>
                            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                              <span role="button" className="swiper-pagination-bullet swiper-pagination-bullet-active" aria-label="Go to slide 1" aria-current="true"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 2"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 3"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 4"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 5"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 6"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 7"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 8"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 9"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 10"></span>
                            </div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-5c1bdc5 elementor-align-justify elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-hidden-desktop elementor-widget elementor-widget-button" data-widget_type="button.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <Link href="" role="button" className="elementor-button elementor-size-sm">
                              <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-text">Treatment Center</span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-92dede2 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-d0ce5eb e-con-full e-flex e-con e-child">
                          <div className="elementor-element elementor-element-334c6c6 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items">
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg className="e-font-icon-svg e-fas-map-marker-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true">
                                      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                    </svg>
                                  </span>
                                  <span className="elementor-icon-list-text">2200 8th Ave S, Nashville, TN 37204</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-571371f elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">
                                Nashville, TN

Renaissance Recovery
                                <b>Drug Rehab Center</b>
                                <br />
                                <br />
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-8bf5374 e-con-full e-flex e-con e-child">
                          <div className="elementor-element elementor-element-cbe012f elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-button-wrapper">
                                <Link href="tel:6292495399" className="elementor-button elementor-button-link elementor-size-sm">
                                  <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">629-249-5399</span>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-d528e8f elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-button-wrapper">
                                <Link href="/facility/drug-rehab-center-nashville-tn-renaissance-recovery/" className="elementor-button elementor-button-link elementor-size-sm">
                                  <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">Take a Tour</span>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-c08a9d5 elementor-align-justify elementor-widget__width-initial elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-button" data-settings="&#123;&quot;_position&quot;:&quot;absolute&quot;&#125;" data-widget_type="button.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <Link href="" role="button" className="elementor-button elementor-size-sm">
                              <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-text">Treatment Center</span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-fb017bd e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-14f8504 e-con-full e-flex e-con e-child" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
                      <div className="elementor-element elementor-element-eaaa0bd elementor-pagination-position-inside elementor-arrows-position-inside elementor-widget elementor-widget-image-carousel e-widget-swiper" data-settings="&#123;&quot;slides_to_show&quot;:&quot;1&quot;,&quot;navigation&quot;:&quot;both&quot;,&quot;infinite&quot;:&quot;yes&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500&#125;" data-widget_type="image-carousel.default">
                        <div className="elementor-widget-container">
                          <div dir="ltr" role="region" className="elementor-image-carousel-wrapper swiper swiper-initialized swiper-horizontal swiper-pointer-events" aria-label="Image Carousel" aria-roledescription="carousel">
                            <div id="swiper-wrapper-57fcd4adc6a77e31" className="elementor-image-carousel swiper-wrapper" aria-live="polite">
                              {gridData11.map((item, i) => (
                                <div key={i} role="group" className="swiper-slide swiper-slide-active" aria-label="1 / 10" aria-roledescription="slide">
                                  <figure className="swiper-slide-inner">
                                    <img loading="lazy" src={item.image} alt="55-2623-Pennington-Ave-055.webp" className="swiper-slide-image" style={{maxWidth: "100%", height: "auto"}} />
                                  </figure>
                                </div>
                              ))}
                            </div>
                            <div role="button" className="elementor-swiper-button elementor-swiper-button-prev" tabIndex={0} aria-label="Previous slide" aria-controls="swiper-wrapper-57fcd4adc6a77e31">
                              <svg className="e-font-icon-svg e-eicon-chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                                <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"></path>
                              </svg>
                            </div>
                            <div role="button" className="elementor-swiper-button elementor-swiper-button-next" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-57fcd4adc6a77e31">
                              <svg className="e-font-icon-svg e-eicon-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" aria-hidden="true">
                                <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"></path>
                              </svg>
                            </div>
                            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                              <span role="button" className="swiper-pagination-bullet swiper-pagination-bullet-active" aria-label="Go to slide 1" aria-current="true"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 2"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 3"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 4"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 5"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 6"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 7"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 8"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 9"></span>
                              <span role="button" className="swiper-pagination-bullet" aria-label="Go to slide 10"></span>
                            </div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-ca882ba elementor-align-justify elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-hidden-desktop elementor-widget elementor-widget-button" data-widget_type="button.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <Link href="" role="button" className="elementor-button elementor-size-sm">
                              <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-text">Sober Living Houses</span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-aa59223 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-95cf836 e-con-full e-flex e-con e-child">
                          <div className="elementor-element elementor-element-cdf5f3b elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items">
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <svg className="e-font-icon-svg e-fas-map-marker-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true">
                                      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                    </svg>
                                  </span>
                                  <span className="elementor-icon-list-text">Tennessee</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-d1edf3c elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">
                                Tennessee

Renaissance Recovery
                                <b>Sober Living</b>
                                <br />
                                <br />
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-2ec890d e-con-full e-flex e-con e-child">
                          <div className="elementor-element elementor-element-eb92852 elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial ctm-no-swap elementor-widget elementor-widget-button" data-widget_type="button.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-button-wrapper">
                                <Link href="tel:629-299-2329" className="elementor-button elementor-button-link elementor-size-sm">
                                  <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">629-299-2329</span>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-873f78b elementor-align-justify elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button" data-widget_type="button.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-button-wrapper">
                                <Link href="/facility/district-recovery-community-nashville/" className="elementor-button elementor-button-link elementor-size-sm">
                                  <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">Take a Tour</span>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-bcd827b elementor-align-justify elementor-widget__width-initial elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-button" data-settings="&#123;&quot;_position&quot;:&quot;absolute&quot;&#125;" data-widget_type="button.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <Link href="" role="button" className="elementor-button elementor-size-sm">
                              <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-text">Sober Living Houses</span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-82dacc2 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-settings="&#123;&quot;background_background&quot;:&quot;gradient&quot;&#125;">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-cb351fa e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-735cada elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">We’d love to hear from you​</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-3f9a9d2 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">Call now to talk to our friendly recovery team, or send us a message. We look forward to getting you the help you need as soon as possible.</div>
                  </div>
                  <div className="elementor-element elementor-element-59b9811 elementor-widget elementor-widget-html" data-widget_type="html.default">
                    <div className="elementor-widget-container">
                      <iframe loading="lazy" id="JotFormIFrame-252953870854469" src="https://form.jotform.com/252953870854469?isIframeEmbed=1&amp;parentURL=https%3A%2F%2Fdistrictbehavioralhealth.com%2Four-facilities%2F&amp;isIframeEmbed=1&amp;parentURL=https%3A%2F%2Fdistrictbehavioralhealth.com%2Four-facilities%2F" allow="geolocation; microphone; camera; fullscreen; payment" title="TDRC New Design Insurance Form" allowTransparency style={{minWidth: "100%", maxWidth: "100%", border: "none", height: "700px"}}></iframe>
                      <WidgetScript src="https://districtbehavioralhealth.com/wp-content/cache/min/1/s/umd/latest/for-form-embed-handler.js?ver=1784915998" />
                      <Script id="inline-script-1" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `window.addEventListener("widgetScriptLoaded",function(){window.jotformEmbedHandler("iframe[id='JotFormIFrame-252953870854469']", "https://form.jotform.com/")},{once:true});` }} />
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-c521911 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-320fdfe e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-d985770 elementor-widget__width-initial elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-widget_type="icon-box.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-icon-box-wrapper">
                          <div className="elementor-icon-box-icon">
                            <span className="elementor-icon">
                              <svg fill="none" width={48} xmlns="http://www.w3.org/2000/svg" height={60} viewBox="0 0 48 60">
                                <path d="M44 30C44 27.3736 43.4827 24.7728 42.4776 22.3463C41.4725 19.9198 39.9993 17.715 38.1421 15.8579C36.285 14.0007 34.0802 12.5275 31.6537 11.5224C29.2272 10.5173 26.6264 10 24 10V14C27.1644 13.9999 30.2577 14.9382 32.8889 16.6961C35.52 18.454 37.5708 20.9526 38.782 23.876C39.5862 25.8175 40.0001 27.8985 40 30H44ZM4 26V16C4 15.4696 4.21071 14.9609 4.58579 14.5858C4.96086 14.2107 5.46957 14 6 14H16C16.5304 14 17.0391 14.2107 17.4142 14.5858C17.7893 14.9609 18 15.4696 18 16V24C18 24.5304 17.7893 25.0391 17.4142 25.4142C17.0391 25.7893 16.5304 26 16 26H12C12 30.2435 13.6857 34.3131 16.6863 37.3137C19.6869 40.3143 23.7565 42 28 42V38C28 37.4696 28.2107 36.9609 28.5858 36.5858C28.9609 36.2107 29.4696 36 30 36H38C38.5304 36 39.0391 36.2107 39.4142 36.5858C39.7893 36.9609 40 37.4696 40 38V48C40 48.5304 39.7893 49.0391 39.4142 49.4142C39.0391 49.7893 38.5304 50 38 50H28C14.746 50 4 39.254 4 26Z" fill="#E2EEFA"></path>
                                <path d="M35.086 25.408C35.6892 26.8638 35.9998 28.4242 36 30H32.4C32.4 27.7722 31.515 25.6356 29.9397 24.0603C28.3644 22.485 26.2278 21.6 24 21.6V18C26.3733 18.0001 28.6933 18.704 30.6666 20.0226C32.6398 21.3412 34.1778 23.2153 35.086 25.408Z" fill="#E2EEFA"></path>
                              </svg>
                            </span>
                          </div>
                          <div className="elementor-icon-box-content">
                            <h3 className="elementor-icon-box-title">
                              <span>Take the first step towards recovery.</span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-33e1e5d elementor-align-justify elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-button animated fadeIn" data-settings="&#123;&quot;_animation&quot;:&quot;fadeIn&quot;&#125;" data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <Link href="tel:888-707-6073" className="elementor-button elementor-button-link elementor-size-sm">
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">Call Now</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-9446cc4 e-con-full elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child">
                    <div className="elementor-element elementor-element-8369043 elementor-widget__width-initial elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-widget_type="icon-box.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-icon-box-wrapper">
                          <div className="elementor-icon-box-icon">
                            <span className="elementor-icon">
                              <svg fill="none" width={48} xmlns="http://www.w3.org/2000/svg" height={60} viewBox="0 0 48 60">
                                <path d="M44 30C44 27.3736 43.4827 24.7728 42.4776 22.3463C41.4725 19.9198 39.9993 17.715 38.1421 15.8579C36.285 14.0007 34.0802 12.5275 31.6537 11.5224C29.2272 10.5173 26.6264 10 24 10V14C27.1644 13.9999 30.2577 14.9382 32.8889 16.6961C35.52 18.454 37.5708 20.9526 38.782 23.876C39.5862 25.8175 40.0001 27.8985 40 30H44ZM4 26V16C4 15.4696 4.21071 14.9609 4.58579 14.5858C4.96086 14.2107 5.46957 14 6 14H16C16.5304 14 17.0391 14.2107 17.4142 14.5858C17.7893 14.9609 18 15.4696 18 16V24C18 24.5304 17.7893 25.0391 17.4142 25.4142C17.0391 25.7893 16.5304 26 16 26H12C12 30.2435 13.6857 34.3131 16.6863 37.3137C19.6869 40.3143 23.7565 42 28 42V38C28 37.4696 28.2107 36.9609 28.5858 36.5858C28.9609 36.2107 29.4696 36 30 36H38C38.5304 36 39.0391 36.2107 39.4142 36.5858C39.7893 36.9609 40 37.4696 40 38V48C40 48.5304 39.7893 49.0391 39.4142 49.4142C39.0391 49.7893 38.5304 50 38 50H28C14.746 50 4 39.254 4 26Z" fill="#E2EEFA"></path>
                                <path d="M35.086 25.408C35.6892 26.8638 35.9998 28.4242 36 30H32.4C32.4 27.7722 31.515 25.6356 29.9397 24.0603C28.3644 22.485 26.2278 21.6 24 21.6V18C26.3733 18.0001 28.6933 18.704 30.6666 20.0226C32.6398 21.3412 34.1778 23.2153 35.086 25.408Z" fill="#E2EEFA"></path>
                              </svg>
                            </span>
                          </div>
                          <div className="elementor-icon-box-content">
                            <h3 className="elementor-icon-box-title">
                              <span>Make the process simple. Ensure your benefits cover treatment.</span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-ed544df elementor-align-justify elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-invisible elementor-widget elementor-widget-button" data-settings="&#123;&quot;_animation&quot;:&quot;fadeIn&quot;&#125;" data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <Link href="/drug/rehab/florida/palm-beach-county/" className="elementor-button elementor-button-link elementor-size-sm">
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">Check Insurance</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-8dcae1e elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-parent" data-settings="&#123;&quot;background_background&quot;:&quot;classic&quot;&#125;">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-f027e11 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-15fa4b5 e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-597a45e e-flex e-con-boxed e-con e-child">
                      <div className="e-con-inner">
                        <div className="elementor-element elementor-element-775d36f elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Contact Us</h2>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-147e3af elementor-widget elementor-widget-heading" data-widget_type="heading.default">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">We're Here to Help Day or Night</h2>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-455f54d elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
                          <div className="elementor-widget-container">
                            <p>Whether you’re seeking help for yourself or a loved one, our admissions team is available 24/7 to answer your questions and guide you toward the right care.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-541d76d elementor-widget elementor-widget-image" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <img loading="lazy" src="/images/0b0f78afe2bd5503a5ca74db31e320da.webp" alt="Frame 840 1" className="attachment-full size-full wp-image-146" style={{maxWidth: "100%", height: "auto"}} />
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-aa5e2b3 e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-9117ce8 elementor-widget__width-inherit elementor-widget-mobile__width-inherit elementor-widget elementor-widget-html" data-widget_type="html.default">
                      <div className="elementor-widget-container">
                        <iframe loading="lazy" id="JotFormIFrame-252953870854469" src="https://form.jotform.com/252953870854469" allow="geolocation; microphone; camera; fullscreen; payment" title="TDRC New Design Insurance Form" allowTransparency style={{minWidth: "100%", maxWidth: "100%", border: "none", height: "700px"}}></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout5>
  );
}
