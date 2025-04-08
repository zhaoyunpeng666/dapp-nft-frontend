import { Box, Typography, Button, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { useState } from 'react';

export default function Settings() {
  const [activeForm, setActiveForm] = useState('profile');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('设置已保存（在原型中此功能不会实际生效）');
  };

  return (
    <>
      <Box className="flex justify-between items-center mb-6">
        <Typography variant="h5" className="font-bold text-[#1a1a2e]">
          账户设置
        </Typography>
      </Box>

      <Box className="flex gap-4 mb-6">
        <Button
          variant={activeForm === 'profile' ? 'contained' : 'outlined'}
          className={activeForm === 'profile' ? 'bg-[#6c63ff] text-white' : 'border-[#6c63ff] text-[#6c63ff]'}
          onClick={() => setActiveForm('profile')}
        >
          个人资料
        </Button>
        <Button
          variant={activeForm === 'notifications' ? 'contained' : 'outlined'}
          className={activeForm === 'notifications' ? 'bg-[#6c63ff] text-white' : 'border-[#6c63ff] text-[#6c63ff]'}
          onClick={() => setActiveForm('notifications')}
        >
          通知设置
        </Button>
        <Button
          variant={activeForm === 'security' ? 'contained' : 'outlined'}
          className={activeForm === 'security' ? 'bg-[#6c63ff] text-white' : 'border-[#6c63ff] text-[#6c63ff]'}
          onClick={() => setActiveForm('security')}
        >
          安全设置
        </Button>
      </Box>

      {activeForm === 'profile' && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Box>
            <Typography variant="subtitle1" className="font-bold mb-2">
              用户名
            </Typography>
            <TextField
              fullWidth
              defaultValue="用户名"
              variant="outlined"
              className="bg-white"
            />
          </Box>
          <Box>
            <Typography variant="subtitle1" className="font-bold mb-2">
              电子邮箱
            </Typography>
            <TextField
              fullWidth
              type="email"
              defaultValue="user@example.com"
              variant="outlined"
              className="bg-white"
            />
          </Box>
          <Box>
            <Typography variant="subtitle1" className="font-bold mb-2">
              个人简介
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              defaultValue="NFT创作者和收藏家，热爱数字艺术和区块链技术。"
              variant="outlined"
              className="bg-white"
            />
          </Box>
          <Box>
            <Typography variant="subtitle1" className="font-bold mb-2">
              个人网站
            </Typography>
            <TextField
              fullWidth
              type="url"
              defaultValue="https://example.com"
              variant="outlined"
              className="bg-white"
            />
          </Box>
          <Box>
            <Typography variant="subtitle1" className="font-bold mb-2">
              Twitter
            </Typography>
            <TextField
              fullWidth
              defaultValue="@username"
              variant="outlined"
              className="bg-white"
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            className="bg-[#6c63ff] text-white mt-4"
          >
            保存更改
          </Button>
        </form>
      )}

      {activeForm === 'notifications' && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Box>
            <Typography variant="subtitle1" className="font-bold mb-4">
              通知设置
            </Typography>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="有人对我的NFT出价时通知我"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="我的出价被超过时通知我"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="拍卖结束时通知我"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="购买成功时通知我"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="销售成功时通知我"
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            className="bg-[#6c63ff] text-white mt-4"
          >
            保存通知设置
          </Button>
        </form>
      )}

      {activeForm === 'security' && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Box>
            <Typography variant="subtitle1" className="font-bold mb-2">
              当前密码
            </Typography>
            <TextField
              fullWidth
              type="password"
              variant="outlined"
              className="bg-white"
            />
          </Box>
          <Box>
            <Typography variant="subtitle1" className="font-bold mb-2">
              新密码
            </Typography>
            <TextField
              fullWidth
              type="password"
              variant="outlined"
              className="bg-white"
            />
          </Box>
          <Box>
            <Typography variant="subtitle1" className="font-bold mb-2">
              确认新密码
            </Typography>
            <TextField
              fullWidth
              type="password"
              variant="outlined"
              className="bg-white"
            />
          </Box>
          <Box>
            <Typography variant="subtitle1" className="font-bold mb-4">
              两步验证
            </Typography>
            <FormControlLabel
              control={<Checkbox />}
              label="启用两步验证 (2FA)"
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            className="bg-[#6c63ff] text-white mt-4"
          >
            更新安全设置
          </Button>
        </form>
      )}
    </>
  );
} 