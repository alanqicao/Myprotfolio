Rails.application.routes.draw do
  namespace :api do
    resources :educations, :skills, :projects, :experiences
    
  end
  
  # namespace :api do
  #   resources :experiences,
  # end

  # namespace :api do
  #   resources :projects,
  # end

  # namespace :api do
  #   resources :skills,
  # end



  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
