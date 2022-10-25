class RootController < ApplicationController
  def index
  end

  def greeting
    @greetings = Greeting.all
    render json: { status: 'SUCCESS', message: 'Messages Loaded', greeting: @greetings }, status: :ok
  end
end
