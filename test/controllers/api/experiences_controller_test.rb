require 'test_helper'

class Api::ExperiencesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_experiences_index_url
    assert_response :success
  end

  test "should get show" do
    get api_experiences_show_url
    assert_response :success
  end

  test "should get create" do
    get api_experiences_create_url
    assert_response :success
  end

  test "should get update" do
    get api_experiences_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_experiences_destroy_url
    assert_response :success
  end

end
