FROM php:8.1-fpm

RUN apt-get update \
    && docker-php-ext-install pdo pdo_mysql \
    && apt-get -y install git \
    && apt-get install zip unzip \
    && apt install -y libgmp-dev \
    && docker-php-ext-install gmp

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
