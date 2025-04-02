import React from 'react';
import { Container, Divider, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      {/* 主要内容 */}
      <Container className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10">
          {/* 左侧：NFT拍卖平台 */}
          <div>
            <h2 className="font-bold text-[18px]">NFT拍卖平台</h2>
            <ul className="mt-4">
              <li className="mb-2"><Link href="" className="hover:underline" 
              style={{ textDecoration: 'none', color: 'white' }}
              >关于我们</Link></li>
              <li className="mb-2"><Link href="" className="no-underline text-white hover:underline"
              style={{ textDecoration: 'none', color: 'white' }}
              >团队</Link></li>
              <li className="mb-2"><Link href="" className="no-underline text-white hover:underline"
              style={{ textDecoration: 'none', color: 'white' }}
              >职业机会</Link></li>
              <li className=""><Link href="" className="no-underline text-white hover:underline"
              style={{ textDecoration: 'none', color: 'white' }}
              >联系我们</Link></li>
            </ul>
          </div>

          {/* 中间左侧：市场 */}
          <div>
            <h2 className="font-bold text-[18px]">市场</h2>
            <ul className="mt-4">
              <li className="mb-2"><Link href="" className="no-underline text-white hover:underline"
              style={{ textDecoration: 'none', color: 'white' }}
              >所有NFT</Link></li>
              <li className="mb-2"><Link href="" className="no-underline text-white hover:underline"
              style={{ textDecoration: 'none', color: 'white' }}
              >艺术</Link></li>
              <li className="mb-2"><Link href="" className="no-underline text-white hover:underline"
              style={{ textDecoration: 'none', color: 'white' }}
              >音乐</Link></li>
              <li className=""><Link href="" className="no-underline text-white hover:underline"
              style={{ textDecoration: 'none', color: 'white' }}
              >摄影</Link></li>
            </ul>
          </div>

          {/* 中间右侧：资源 */}
          <div>
            <h2 className="font-bold text-[18px]">资源</h2>
            <ul className="mt-4">
              <li className="mb-2"><Link href="" className="no-underline text-white hover:underline"
              style={{ textDecoration: 'none', color: 'white' }}
              >帮助中心</Link></li>
              <li className="mb-2"><Link href="" className="no-underline text-white hover:underline"
              style={{ textDecoration: 'none', color: 'white' }}
              >平台状态</Link></li>
              <li className="mb-2"><Link href="" className="no-underline text-white hover:underline"
              style={{ textDecoration: 'none', color: 'white' }}
              >合作伙伴</Link></li>
              <li className=""><Link href="" className="no-underline text-white hover:underline"
              style={{ textDecoration: 'none', color: 'white' }}
              >博客</Link></li>
            </ul>
          </div>

          {/* 右侧：法律 */}
          <div>
            <h2 className="font-bold text-[18px]">法律</h2>
            <ul className="mt-4">
              <li className="mb-2"><Link href="" className="no-underline text-white hover:underline"
              style={{ textDecoration: 'none', color: 'white' }}
              >服务条款</Link></li>
              <li className="mb-2"><Link href="" className="no-underline text-white hover:underline"
              style={{ textDecoration: 'none', color: 'white' }}
              >隐私政策</Link></li>
              <li className="mb-2"><Link href="" className="no-underline text-white hover:underline"
              style={{ textDecoration: 'none', color: 'white' }}
              >版权政策</Link></li>
              <li className=""><Link href="" className="no-underline text-white hover:underline"
              style={{ textDecoration: 'none', color: 'white' }}
              >费用说明</Link></li>
            </ul>
          </div>
        </div>
        <Divider />
      </Container>
      {/* 底部版权信息 */}
      <div className="flex justify-center gap-4 mt-8">
        {/* 版权信息 */}
        <span>©2025 NFT拍卖平台. 保留所有权利.</span>
      </div>
    </footer>
  );
};

export default Footer;
