# Use a imagem base do PHP com Apache
FROM php:8.3.4-apache

# Instale as extensões necessárias para o CodeIgniter
RUN apt-get update && apt-get install -y \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    libzip-dev \
    libonig-dev \
    libxml2-dev \
    libcurl4-openssl-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) iconv \
    && docker-php-ext-configure intl \
    && docker-php-ext-install -j$(nproc) intl \
    && docker-php-ext-install -j$(nproc) pdo_mysql mysqli \
    && docker-php-ext-install -j$(nproc) mbstring \
    && docker-php-ext-install -j$(nproc) zip \
    && docker-php-ext-install -j$(nproc) curl

# Habilite o módulo mod_rewrite
RUN a2enmod rewrite

# Copie o diretório da aplicação para o container
COPY . /var/www/html/

# Instale o Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Execute o composer install para instalar as dependências do projeto
RUN composer install

# Modifique o arquivo de configuração do Apache para servir o diretório /var/www/html/public/
RUN sed -i 's|DocumentRoot /var/www/html|DocumentRoot /var/www/html/public|' /etc/apache2/sites-available/000-default.conf

# Exponha a porta 80 para acesso externo
EXPOSE 80
