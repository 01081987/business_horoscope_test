describe('TestPageOpens', () => {
    it('Переход на страницу бизнес-гороскопа', () => {
      cy.log('Переход на главную страницу сервиса')
      cy.visit('https://horo.mail.ru/prediction/aries/today/')

      cy.log("Переход на страницу бизнес-гороскопа")
      cy.get('div[class="p-score-day__item__text"]')
      cy.contains('Бизнес').click()
          })
  })
  
  describe('TestPageOpens', () => {
    it('Проверка отображения прогноза для Козерога', () => {
      cy.log('Переход на страницу гороскопа')
      cy.visit('https://horo.mail.ru/horoscope/business/1985-01-01/')
      
      cy.log("Проверка отображения прогноза для Козерога")
      cy.get('button[class="button button_color_project button_top margin_left_20"]').click()
      cy.get('body').should('contain', 'Солнце в Козероге')
          })
  })
      
  describe('TestPageOpens', () => {
    it('Проверка отображения прогноза для Водолея', () => {
      cy.log('Переход на страницу гороскопа')
      cy.visit('https://horo.mail.ru/horoscope/business/1985-01-01/')    

      cy.log("Проверка отображения прогноза для Водолея")
      cy.get('div[class="dropdown dropdown_month_fix dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]').click()
      cy.get('div[class="suggest__item js-select__options__item suggest__item_active"]')
      cy.contains('февраля').click()
      cy.get('button[class="button button_color_project button_top margin_left_20"]').click()
      cy.get('body').should('contain', 'Солнце в Водолее')
          })
  })        
     
  describe('TestPageOpens', () => {
    it('Проверка отображения прогноза для Рыб', () => {
      cy.log('Переход на страницу гороскопа')
      cy.visit('https://horo.mail.ru/horoscope/business/1985-01-01/')    

      cy.log("Проверка отображения прогноза для Рыб")
      cy.get('div[class="dropdown dropdown_month_fix dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]').click()
      cy.get('div[class="suggest__item js-select__options__item suggest__item_active"]')
      cy.contains('марта').click()
      cy.get('button[class="button button_color_project button_top margin_left_20"]').click()
      cy.get('body').should('contain', 'Солнце в Рыбах')
          })
  })        
     
  describe('TestPageOpens', () => {
    it('Проверка отображения прогноза для Овна', () => {
      cy.log('Переход на страницу гороскопа')
      cy.visit('https://horo.mail.ru/horoscope/business/1985-01-01/') 

      cy.log("Проверка отображения прогноза для Овна")
      cy.get('div[class="dropdown dropdown_month_fix dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]').click()
      cy.get('div[class="suggest__item js-select__options__item suggest__item_active"]')
      cy.contains('апреля').click()
      cy.get('button[class="button button_color_project button_top margin_left_20"]').click()
      cy.get('body').should('contain', 'Солнце в Овне')
          })
  })        
     
  describe('TestPageOpens', () => {
    it('Проверка отображения прогноза для Тельца', () => {
      cy.log('Переход на страницу гороскопа')
      cy.visit('https://horo.mail.ru/horoscope/business/1985-01-01/') 

      cy.log("Проверка отображения прогноза для Тельца")
      cy.get('div[class="dropdown dropdown_month_fix dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]').click()
      cy.get('div[class="suggest__item js-select__options__item suggest__item_active"]')
      cy.contains('мая').click()
      cy.get('button[class="button button_color_project button_top margin_left_20"]').click()
      cy.get('body').should('contain', 'Солнце в Тельце')
          })
  })        
      
 describe('TestPageOpens', () => {
    it('Проверка отображения прогноза для Близнецов', () => {
      cy.log('Переход на страницу гороскопа')
      cy.visit('https://horo.mail.ru/horoscope/business/1985-01-01/') 

      cy.log("Проверка отображения прогноза для Близнецов")
      cy.get('div[class="dropdown dropdown_month_fix dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]').click()
      cy.get('div[class="suggest__item js-select__options__item suggest__item_active"]')
      cy.contains('июня').click()
      cy.get('button[class="button button_color_project button_top margin_left_20"]').click()
      cy.get('body').should('contain', 'Солнце в Близнецах')
          })
  })        
      
  describe('TestPageOpens', () => {
    it('Проверка отображения прогноза для Рака', () => {
      cy.log('Переход на страницу гороскопа')
      cy.visit('https://horo.mail.ru/horoscope/business/1985-01-01/') 

      cy.log("Проверка отображения прогноза для Рака")
      cy.get('div[class="dropdown dropdown_month_fix dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]').click()
      cy.get('div[class="suggest__item js-select__options__item suggest__item_active"]')
      cy.contains('июля').click()
      cy.get('button[class="button button_color_project button_top margin_left_20"]').click()
      cy.get('body').should('contain', 'Солнце в Раке')
    })
  })        
      
  describe('TestPageOpens', () => {
    it('Проверка отображения прогноза для Льва', () => {
      cy.log('Переход на страницу гороскопа')
      cy.visit('https://horo.mail.ru/horoscope/business/1985-01-01/') 

      cy.log("Проверка отображения прогноза для Льва")
      cy.get('div[class="dropdown dropdown_month_fix dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]').click()
      cy.get('div[class="suggest__item js-select__options__item suggest__item_active"]')
      cy.contains('августа').click()
      cy.get('button[class="button button_color_project button_top margin_left_20"]').click()
      cy.get('body').should('contain', 'Солнце в Льве')
          })
  })   
      
  describe('TestPageOpens', () => {
    it('Проверка отображения прогноза для Девы', () => {
      cy.log('Переход на страницу гороскопа')
      cy.visit('https://horo.mail.ru/horoscope/business/1985-01-01/') 

      cy.log("Проверка отображения прогноза для Девы")
      cy.get('div[class="dropdown dropdown_month_fix dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]').click()
      cy.get('div[class="suggest__item js-select__options__item suggest__item_active"]')
      cy.contains('сентября').click()
      cy.get('button[class="button button_color_project button_top margin_left_20"]').click()
      cy.get('body').should('contain', 'Солнце в Деве')
          })
  })   
      
  describe('TestPageOpens', () => {
    it('Проверка отображения прогноза для Весов', () => {
      cy.log('Переход на страницу гороскопа')
      cy.visit('https://horo.mail.ru/horoscope/business/1985-01-01/') 

      cy.log("Проверка отображения прогноза для Весов")
      cy.get('div[class="dropdown dropdown_month_fix dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]').click()
      cy.get('div[class="suggest__item js-select__options__item suggest__item_active"]')
      cy.contains('октября').click()
      cy.get('button[class="button button_color_project button_top margin_left_20"]').click()
      cy.get('body').should('contain', 'Солнце в Весах')
          })
  })   
     
  describe('TestPageOpens', () => {
    it('Проверка отображения прогноза для Скорпиона', () => {
      cy.log('Переход на страницу гороскопа')
      cy.visit('https://horo.mail.ru/horoscope/business/1985-01-01/') 

      cy.log("Проверка отображения прогноза для Скорпиона")
      cy.get('div[class="dropdown dropdown_month_fix dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]').click()
      cy.get('div[class="suggest__item js-select__options__item suggest__item_active"]')
      cy.contains('ноября').click()
      cy.get('button[class="button button_color_project button_top margin_left_20"]').click()
      cy.get('body').should('contain', 'Солнце в Скорпионе')
          })
  })   
      
  describe('TestPageOpens', () => {
    it('Проверка отображения прогноза для Стрельца', () => {
      cy.log('Переход на страницу гороскопа')
      cy.visit('https://horo.mail.ru/horoscope/business/1985-01-01/') 

      cy.log("Проверка отображения прогноза для Стрельца")
      cy.get('div[class="dropdown dropdown_month_fix dropdown_tooltip dropdown_scrollable dropdown_scrollable margin_left_5 js-date__select"]').click()
      cy.get('div[class="suggest__item js-select__options__item suggest__item_active"]')
      cy.contains('декабря').click()
      cy.get('button[class="button button_color_project button_top margin_left_20"]').click()
      cy.get('body').should('contain', 'Солнце в Стрельце')
      
          })
  })   

      

 