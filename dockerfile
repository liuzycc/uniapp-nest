# 使用Node.js镜像
FROM node:21

# 设置工作目录
WORKDIR /root/uniapp/service/nestApp

# 环境变量
ENV NODE_ENV production

# 复制`package.json`和`package-lock.json`(如果有的话)
COPY package*.json ./

# 安装依赖项，包括PM2
RUN npm install -g pnpm
# 设置 SHELL 环境变量为 sh (或者你可以使用 bash)
ENV SHELL=/bin/sh
# 自动创建全局 bin 目录
RUN pnpm setup
RUN pnpm install -g @nestjs/cli
RUN pnpm install -g express
RUN pnpm install
# 将项目文件复制到容器内
COPY . .
# 构建应用程序
RUN nest build

# 应用运行的端口
EXPOSE 3000

# 使用PM2启动应用
CMD ["pm2-runtime", "start", "ecosystem.config.js", "--env", "production"]