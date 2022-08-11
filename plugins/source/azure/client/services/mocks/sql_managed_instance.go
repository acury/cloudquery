// Code generated by MockGen. DO NOT EDIT.
// Source: github.com/cloudquery/cloudquery/plugins/source/azure/client/services (interfaces: ManagedInstancesClient,ManagedInstanceVulnerabilityAssessmentsClient,ManagedInstanceEncryptionProtectorsClient)

// Package mocks is a generated GoMock package.
package mocks

import (
	context "context"
	reflect "reflect"

	sql "github.com/Azure/azure-sdk-for-go/services/preview/sql/mgmt/v4.0/sql"
	gomock "github.com/golang/mock/gomock"
)

// MockManagedInstancesClient is a mock of ManagedInstancesClient interface.
type MockManagedInstancesClient struct {
	ctrl     *gomock.Controller
	recorder *MockManagedInstancesClientMockRecorder
}

// MockManagedInstancesClientMockRecorder is the mock recorder for MockManagedInstancesClient.
type MockManagedInstancesClientMockRecorder struct {
	mock *MockManagedInstancesClient
}

// NewMockManagedInstancesClient creates a new mock instance.
func NewMockManagedInstancesClient(ctrl *gomock.Controller) *MockManagedInstancesClient {
	mock := &MockManagedInstancesClient{ctrl: ctrl}
	mock.recorder = &MockManagedInstancesClientMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockManagedInstancesClient) EXPECT() *MockManagedInstancesClientMockRecorder {
	return m.recorder
}

// List mocks base method.
func (m *MockManagedInstancesClient) List(arg0 context.Context) (sql.ManagedInstanceListResultPage, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "List", arg0)
	ret0, _ := ret[0].(sql.ManagedInstanceListResultPage)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// List indicates an expected call of List.
func (mr *MockManagedInstancesClientMockRecorder) List(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "List", reflect.TypeOf((*MockManagedInstancesClient)(nil).List), arg0)
}

// MockManagedInstanceVulnerabilityAssessmentsClient is a mock of ManagedInstanceVulnerabilityAssessmentsClient interface.
type MockManagedInstanceVulnerabilityAssessmentsClient struct {
	ctrl     *gomock.Controller
	recorder *MockManagedInstanceVulnerabilityAssessmentsClientMockRecorder
}

// MockManagedInstanceVulnerabilityAssessmentsClientMockRecorder is the mock recorder for MockManagedInstanceVulnerabilityAssessmentsClient.
type MockManagedInstanceVulnerabilityAssessmentsClientMockRecorder struct {
	mock *MockManagedInstanceVulnerabilityAssessmentsClient
}

// NewMockManagedInstanceVulnerabilityAssessmentsClient creates a new mock instance.
func NewMockManagedInstanceVulnerabilityAssessmentsClient(ctrl *gomock.Controller) *MockManagedInstanceVulnerabilityAssessmentsClient {
	mock := &MockManagedInstanceVulnerabilityAssessmentsClient{ctrl: ctrl}
	mock.recorder = &MockManagedInstanceVulnerabilityAssessmentsClientMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockManagedInstanceVulnerabilityAssessmentsClient) EXPECT() *MockManagedInstanceVulnerabilityAssessmentsClientMockRecorder {
	return m.recorder
}

// ListByInstance mocks base method.
func (m *MockManagedInstanceVulnerabilityAssessmentsClient) ListByInstance(arg0 context.Context, arg1, arg2 string) (sql.ManagedInstanceVulnerabilityAssessmentListResultPage, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ListByInstance", arg0, arg1, arg2)
	ret0, _ := ret[0].(sql.ManagedInstanceVulnerabilityAssessmentListResultPage)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListByInstance indicates an expected call of ListByInstance.
func (mr *MockManagedInstanceVulnerabilityAssessmentsClientMockRecorder) ListByInstance(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListByInstance", reflect.TypeOf((*MockManagedInstanceVulnerabilityAssessmentsClient)(nil).ListByInstance), arg0, arg1, arg2)
}

// MockManagedInstanceEncryptionProtectorsClient is a mock of ManagedInstanceEncryptionProtectorsClient interface.
type MockManagedInstanceEncryptionProtectorsClient struct {
	ctrl     *gomock.Controller
	recorder *MockManagedInstanceEncryptionProtectorsClientMockRecorder
}

// MockManagedInstanceEncryptionProtectorsClientMockRecorder is the mock recorder for MockManagedInstanceEncryptionProtectorsClient.
type MockManagedInstanceEncryptionProtectorsClientMockRecorder struct {
	mock *MockManagedInstanceEncryptionProtectorsClient
}

// NewMockManagedInstanceEncryptionProtectorsClient creates a new mock instance.
func NewMockManagedInstanceEncryptionProtectorsClient(ctrl *gomock.Controller) *MockManagedInstanceEncryptionProtectorsClient {
	mock := &MockManagedInstanceEncryptionProtectorsClient{ctrl: ctrl}
	mock.recorder = &MockManagedInstanceEncryptionProtectorsClientMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockManagedInstanceEncryptionProtectorsClient) EXPECT() *MockManagedInstanceEncryptionProtectorsClientMockRecorder {
	return m.recorder
}

// ListByInstance mocks base method.
func (m *MockManagedInstanceEncryptionProtectorsClient) ListByInstance(arg0 context.Context, arg1, arg2 string) (sql.ManagedInstanceEncryptionProtectorListResultPage, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ListByInstance", arg0, arg1, arg2)
	ret0, _ := ret[0].(sql.ManagedInstanceEncryptionProtectorListResultPage)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListByInstance indicates an expected call of ListByInstance.
func (mr *MockManagedInstanceEncryptionProtectorsClientMockRecorder) ListByInstance(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListByInstance", reflect.TypeOf((*MockManagedInstanceEncryptionProtectorsClient)(nil).ListByInstance), arg0, arg1, arg2)
}
